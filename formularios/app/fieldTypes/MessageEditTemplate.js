var MessageEditTemplate= "\
<div intro=\"slide\" class=\"editar_informacion field-editor\">\
  <h4>Editar campo de mensaje</h4>\
  <label>Título:</label> <input value=\"{{title}}\" class=\"text\"  placeholder=\"Título\" /> \
  <br />\
  <label>Estilo del mensaje:</label> <select value=\"{{style}}\"> <option value=\"normal\">Normal</option> <option value=\"alert-info\">Información (Azul)</option> <option value=\"alert-warning\">Precaución (Amarillo)</option> <option value=\"alert-danger\">Peligro (Rojo) </option> <option value=\"alert-success\">Éxito (Verde)</option> </select> \
  <hr />\
  <label>Contenido <small>(Requerido)</small></label> <textarea class=\"textarea\" placeholder=\"Contenido\" value=\"{{content}}\"></textarea> \
\
  <hr />\
  <input class=\"button-primary\" type=\"button\" value=\"Guardar\" on-click=\"done\" />\
</div> \
";
