FormEditor.FieldTypes.registerType( {
  name: "name",
  title: "Nombre",
  abstract: 
    function (field) {
      return "Nombre - "+field.label;
    },
  done:
    function (root, keypath, data) {
      if (data.label !== "") {
        root.set(keypath+".label", data.label);
        return true;
      }
      return false;
    },
  initialize: 
    function (self, keypath) {
      
    },
  partial:  NameEditTemplate
}); 
 
 
