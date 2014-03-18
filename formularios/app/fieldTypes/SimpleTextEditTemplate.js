var SimpleTextEditTemplate= "\
<div intro=\"slide\" class=\"editar_informacion field-editor\">\
  <h4>Editar campo</h4>\
  <label>Nombre <small>(Requerido)</small></label> <input id=\"nuevoNombre\"  class=\"text\" value=\"{{label}}\"  placeholder=\"Nombre\" /> \
  <br />\
  <label>Descripción:</label> <input id=\"nuevoDescripcion\"  class=\"text\" value=\"{{description}}\"  placeholder=\"Descripción\" /> \
  <br />\
  <label>Mínimo <small>(Requerido, debe ser menor que el máximo)</small></label> <input  value=\"{{min}}\" id=\"nuevoMin\" /> <br />\
  <label>Máximo <small>(Requerido, debe ser mayor que cero)</small></label> <input  value=\"{{max}}\" id=\"nuevoMax\"  /> <hr />\
  <input class=\"button-primary\" type=\"button\" value=\"Guardar\" on-click=\"done\" />\
</div>\
";
