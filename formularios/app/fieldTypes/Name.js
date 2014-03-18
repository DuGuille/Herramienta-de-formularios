// Register types:
FormFiller.FieldTypes.registerType( {
  name: "name",
  
  checkValid: 
    function (event) {
      var index = event.node.getAttribute( 'data-index' );
      var cars = event.node.value.length;
      var isValid = cars > 5 && event.node.value.match(/[a-zA-ZáéíóúÁÉÍÓÚü]{2}[a-zA-ZáéíóúÁÉÍÓÚü]*\s[a-zA-ZáéíóúÁÉÍÓÚü]{2}[a-zA-ZáéíóúÁÉÍÓÚü]*/) ;
      
      event.root.set(event.keypath + ".validField", isValid); 
      
      FormFiller.parentCheckValid(event);

      
      return isValid;
    },
  initialize: 
    function (self, keypath) {
      
    },
  partial: NameTemplate
}); 
 
