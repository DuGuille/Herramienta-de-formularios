if (!FormTemplate) 
  console.log("Error: Include FormTemplate.js");

var FormFiller = {
  initialize: function (el, data) { 
    return new ( Ractive.extend ( {
      el: el,
      data: data,
      // This expects the file FormTemplate.js to be already included.
      template: FormTemplate,
      init: function () {
        var self = this;
        this.status = "initialized";
        this.on("checkValid", function (event) {
          // Validation checker should be registered for this type:
          FormFiller.FieldTypes.validCheckers[event.context.type](event);
        });
        
        for (var i = 0; i < this.data.fields.length; i ++) {
          // call the initializer for this type send the self object and the keypath of the node.
          this.set( "fields."+i+".prefix", "main");
          this.set( "fields."+i+".index", i);
          var type = this.data.fields[i].type;
          FormFiller.FieldTypes.fieldInitializers[type](self, "fields."+i);
        }
      },
      partials: FormFiller.FieldTypes.partials
    } ) )();
  },
  FieldTypes : {
    partials: {},
    registeredTypes: [],
    fieldInitializers: {},
    validCheckers: {},
    registerType: function (typeDefinition) {
      // Add partial to local object and to Ractive component
      this.partials[typeDefinition.name] = typeDefinition.partial;
      // Register validation checker
      this.validCheckers[typeDefinition.name] = typeDefinition.checkValid;
      // Initializers for each type
      this.fieldInitializers[typeDefinition.name] = typeDefinition.initialize;
      // Add the type to the list
      this.registeredTypes.push(typeDefinition.name);
      // Add the partial to the template
      // TODO: There SHOULD  be a better way of doing this
       FormTemplate = FormTemplate.replace("<!-- TypePartial -->", "<!-- TypePartial -->\n    {{#(type==\"" + typeDefinition.name + "\")}} {{>" + typeDefinition.name + "}} {{/ end}}");
    },
  },
  parentCheckValid: function (event) {
    var tempRE = event.keypath.match(/(.*fields\.\d+)\.fields\.\d+$/);
    // if matched, there exists a parent in tempRE[1]
    if (tempRE) {
      var parentContext = event.root.get(tempRE[1]);
      // call the validation checker for the parent type, send the keypath and the context
      FormFiller.FieldTypes.validCheckers[parentContext.type]({
        keypath: tempRE[1],
        context: parentContext,
        // we can't send the node U.U or could we ?
        node: null,
        // the parent could get the childNode if it nows its own dom structure
        childNode: event.node,
        original: event.original,
        index: event.index,
        root: event.root
      });
    }
  }
};