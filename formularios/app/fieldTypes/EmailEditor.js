FormEditor.FieldTypes.registerType( {
  name: "email",
  title: "Correo",
  abstract: 
    function (field) {
      return "Correo - "+field.label;
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
  partial:  EmailEditTemplate
}); 
 
 
 
