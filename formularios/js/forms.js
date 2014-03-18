FormEditor = Ractive.extend( {
  this.removeField = function (event, index) {
    
  };
  this.moveFieldUp = function (event. index) {
    
  }
  this.moveFieldDown = function (event, index) {
    
  }
  this.editField = function (event, index) {
  
    
  }
  this.init = function (options) {
    this.on ({
      moveFieldUp: this.moveFieldUp,
      moveFielDown: this.moveFieldDown,
      removeField: this.removeField
    });
  }
});
