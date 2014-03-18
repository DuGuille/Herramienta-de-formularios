FormEditor.FieldTypes.registerType( {
  name: "container",
  // TODO: internationalization and customization.
  title: "Contenedor",
  abstract: 
    function (field) {
      return "Múltiples textos - "+field.label+", campos: "+field.fields.length+",  max: "+field.max+", min: "+field.min;
    },
  done:
    function (root, keypath, data) {
      if (data.label !== "" && data.min <= data.max && data.max > 0) {
        root.set(keypath+ ".label", data.label);
        root.set(keypath+ ".min", data.min);
        root.set(keypath+ ".max", data.max);
        root.set(keypath+ ".description", data.description);
        root.set(keypath+ ".fields", data.fields);
        return true;
      }
      return false;
    },
  initialize: 
    function (self) {
      if (!self.data.fields) self.data.fields = [];
      self.on({
        deleteField: function (event, index) {
          if (confirm("Borrar el campo?"))
            event.root.data.fields.splice(index,1);
        },
        
        moveUp: function (event, index) {
          if (index > 0) {
            var temp = event.root.data.fields[index-1];
            event.root.set("fields."+(index-1), event.root.data.fields[index]);
            event.root.set("fields."+index, temp);
          }
        },
        
        moveDown: function (event, index) {
          if (index < event.root.data.fields.length-1) {
            var temp = event.root.data.fields[index+1];
            event.root.set("fields."+(index+1), formRactive.data.fields[index]);
            event.root.set("fields."+index, temp);
          }
        },
        addTextField: function (event) {
          this.data.fields.push({ type:"simpleText", label: "", description: "", min: "", max: ""});
        },
        addMessageField: function (event) {
          this.data.fields.push({ type:"message", title: "", content: "", style: "normal" });
        }
      });
    },
  partial: ContainerEditTemplate
}); 
 
 
