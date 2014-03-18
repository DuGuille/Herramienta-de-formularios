// Register types:
FormFiller.FieldTypes.registerType( {
  name: "email",
  
  checkValid: 
    function (event) {
      var index = event.node.getAttribute( 'data-index' );
      var cars = event.node.value.length;
      var isValid = cars>0 && event.node.value.match(/\@/) ;
      
      event.root.set(event.keypath + ".validField", isValid); 
      
      FormFiller.parentCheckValid(event);

      
      return isValid;
    },
  initialize: 
    function (self, keypath) {
      
    },
  partial: EmailTemplate
}); 
 
