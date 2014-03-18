FormEditor.FieldTypes.registerType( {
  name: "message",
  // TODO: internationalization and customization.
  title: "Mensaje",
  abstract: 
    function (field) {
      return "Mensaje "+(field.title? "- "+field.title: "")+" -  " + field.content.substring(0,50) + "... ";
    },
  done:
    function (root, keypath, data) {
      if (data.content && data.content !== "") {
        root.set(keypath+".title", data.title);
        root.set(keypath+".content", data.content);
        root.set(keypath+".style", data.style);
        return true;
      }
      return false;
    },
  initialize: 
    function (self, keypath) {
      
    },
  partial: MessageEditTemplate
}); 
 
 
