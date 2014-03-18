FormFiller.FieldTypes.registerType( {
  name: "container",
  checkValid: 
    function (event) {
      var totalCars = 0;
      var childsAreValid = true;
      for (var i = 0; i < event.context.fields.length; i ++) {
        if (event.context.fields[i].cars)
            totalCars += event.context.fields[i].cars;
        if ( ! event.context.fields[i].validField) 
            childsAreValid = false;
      }
      var isValid = childsAreValid && (totalCars <=event.context.max && totalCars >= event.context.min);
      event.root.set(event.keypath + ".cars",totalCars);
      event.root.set(event.keypath + ".validField",isValid);
      
      FormFiller.parentCheckValid(event);
      
      return isValid;
    },
  initialize: 
    function (self, keypath) {
      
      var fieldNode = self.get(keypath);
      if (!fieldNode.fields) {
        self.set(keypath+".type", "unknown");
        throw "Empty container";
      }
      for (var i = 0; i < fieldNode.fields.length; i ++) {
        self.set(keypath + ".fields." + i + ".prefix", fieldNode.prefix + fieldNode.index + "-subfield");
        self.set(keypath + ".fields." + i + ".index", i);
        var type = fieldNode.fields[i].type;
        if (!type) type = "simpleText";
        // call the initializer for this type send the self object and the keypath.
        FormFiller.FieldTypes.fieldInitializers[type](self, keypath+".fields."+i);
      }
    },
  partial: ContainerTemplate
}); 
