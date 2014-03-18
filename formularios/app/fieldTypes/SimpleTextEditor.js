FormEditor.FieldTypes.registerType( {
  name: "simpleText",
  // TODO: internationalization and customization.
  title: "Texto",
  abstract: 
    function (field) {
      return "Texto - "+field.label + ", min: "+field.min + ", max: "+field.max;
    },
  done:
    function (root, keypath, data) {
      if (data.label !== "" && data.min <= data.max && data.max > 0) {
        root.set(keypath+".label", data.label);
        root.set(keypath+".description", data.description);
        root.set(keypath+".min", data.min);
        root.set(keypath+".max", data.max);
        return true;
      }
      return false;
    },
  initialize: 
    function (self) {
      
    },
  partial: SimpleTextEditTemplate
}); 
 
