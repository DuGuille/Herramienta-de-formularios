if (!FormEditorTemplate) 
  console.log("Error: Include FormEditorTemplate.js");

var FormEditor = {
  initialize: function (elform, elfield, data) {
    // an abstract for the field list
    data.abstract = function(index) {
      return FormEditor.FieldTypes.fieldTypeObjects[data.fields[index].type].abstract(data.fields[index]);
    };
    
    return new ( Ractive.extend ( {
      el: elform,
      data: data,
      // This expects the file FormTemplate.js to be already included.
      template: FormEditorTemplate,
      init: function () {
        var self = this;
        
        this.elField = elfield;
        this.status = "initialized";
        
        this.set("types", []);
        for (var i = 0; i < FormEditor.FieldTypes.registeredTypes.length; i ++) {
          var field = FormEditor.FieldTypes.fieldTypeObjects[FormEditor.FieldTypes.registeredTypes[i]];
          this.set( "types."+i, {
            name: field.name,
            title: field.title
          } );
        }
        
        this.on(  {
          // hacer un nuevo campo
          newField: function (event) {
            var type = this.get("newType");
            var newfield =  {type: type, new: true};
            var newindex = event.root.data.fields.length;
            event.root.data.fields.push(newfield);
            this.fire("editField", {
                keypath: "fields."+newindex,
                root: event.root,
                context: newfield
            });
          },
          
          deleteField: function (event, index) {
            if (confirm("Borrar el campo?"))
              event.root.data.fields.splice(index,1);
          },
          
          moveUp: function (event, index) {
            if (index > 0) {
              var temp = event.root.data.fields[index-1];
              event.root.set("fields."+(index-1), event.root.data.fields[index]);
              event.root.set("fields."+(index-1)+ ".update", event.root.get("fields."+(index-1)+".update")?false:true);
              event.root.set("fields."+index, temp);
              event.root.set("fields."+(index) +".update", event.root.get("fields."+(index)+".update")?false:true);
            }
          },
          
          moveDown: function (event, index) {
            if (index < event.root.data.fields.length-1) {
              var temp = event.root.data.fields[index+1];
              event.root.set("fields."+(index+1), event.root.data.fields[index]);
              event.root.set("fields."+(index+1) +".update", event.root.get("fields."+(index+1)+".update")?false:true);
              event.root.set("fields."+index, temp);
              event.root.set("fields."+(index) +".update", event.root.get("fields."+(index)+".update")?false:true);
            }
          },
          
          editField: function (event) {
            // hide form editor
            this.beforeEditField(event);
            this.fieldEditor = FormEditor.FieldTypes.initialize(this.elField, event.keypath, event.context, event.root , this.doneEditField);
          },
          
          teardown: function () {
            for (var i = 0; i < this.data.fields.length; i ++) {
              delete this.data.fields[i].update;
            }
            if (this.fieldEditor)
              this.fieldEditor.teardown();
          }
        } );
      },
      partials: FormEditor.FieldTypes.partials,
    } ) )();
  },
  FieldTypes : {
    initialize: function (el, keypath, context, root, doneCallback) {
      return new ( Ractive.extend( {
        el: el,
        template: this.fieldTypeObjects[context.type].partial,
        init: function () {
          FormEditor.FieldTypes.fieldTypeObjects[context.type].initialize(this);
          this.on({
            done: function (event) {
              if (!FormEditor.FieldTypes.fieldTypeObjects[context.type].done(root, keypath, this.data)) {
                // not done
                doneCallback(false);  
                return;
              }
              root.set(keypath+".update", root.get(keypath + ".update")? false: true);
              doneCallback(event);
            }
          });
        },
        data: context
      } ) )();
    },
    partials: {},
    registeredTypes: [],
    fieldTypeObjects: {},
    registerType: function (typeDefinition) {
      // Add partial to local object and to Ractive component
      this.partials[typeDefinition.name] = typeDefinition.partial;
      // Save the object
      this.fieldTypeObjects[typeDefinition.name] = typeDefinition;
      // Add the type to the list
      this.registeredTypes.push(typeDefinition.name);
    }
  }
}; 
