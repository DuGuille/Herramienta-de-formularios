// Register types:
FormFiller.FieldTypes.registerType( {
  name: "simpleText",
  
  checkValid: 
    function (event) {
      var index = event.node.getAttribute( 'data-index' );
      var cars = event.node.value.length;
      var isValid = (cars <=event.context.max && cars >= event.context.min);
            
      event.root.set(event.keypath + ".cars",cars);
      event.root.set(event.keypath + ".validField", isValid); 
      
      FormFiller.parentCheckValid(event);
      
      return isValid;
    },
  initialize: 
    function (self, keypath) {
      var fieldValue = self.get(keypath + ".value");
      if (!fieldValue)
        self.set(keypath + ".cars", 0);
      else 
        self.set(keypath + ".cars", fieldValue.length);
    },
  partial: SimpleTextTemplate
}); 
