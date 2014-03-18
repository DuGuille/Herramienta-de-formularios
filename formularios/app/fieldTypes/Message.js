FormFiller.FieldTypes.registerType( {
  name: "message",
  checkValid: 
    function (event) {
      // it is valid 
      event.root.set(event.keypath +".validField", true ); 
    },
  initialize: 
    function (self, keypath) {
      self.set(keypath+".validField", true );
    },
  partial: MessageTemplate
}); 

