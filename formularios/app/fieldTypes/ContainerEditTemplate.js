var ContainerEditTemplate= "\
<div intro=\"slide\" class=\"editar_informacion field-editor\">\
  <h4>Editar campo contenedor</h4>\
  <label>Título <small>(Requerido)</small></label> <input value=\"{{label}}\" class=\"text\"  placeholder=\"Título\" /> \
  <br />\
  <label>Descripción:</label> <input class=\"text\" value=\"{{description}}\" placeholder=\"Contenido\" /> <br />\
  <label>Mínimo <small>(Requerido, debe ser menor que el máximo)</small></label> <input  value=\"{{min}}\" id=\"nuevoMin\" /> <br />\
  <label>Máximo <small>(Requerido, debe ser mayor que cero)</small></label> <input  value=\"{{max}}\" id=\"nuevoMax\"  />\
\
  <hr />\
  \
  <h5>Campos en el contenedor:</h5>\
  <div class=\"container-fields\">\
    <hr />\
    {{#fields:i}}\
      <div class=\"editar_información\">\
        {{#( type == \"simpleText\" )}}\
          <div class=\"container-field-controls\"> \
            <input type=\"button\" on-click=\"deleteField:{{i}}\" value=\"X\" />\
            <input type=\"button\" on-click=\"moveUp:{{i}}\" value=\"^\" />\
            <input type=\"button\" on-click=\"moveDown:{{i}}\" value=\"v\" />\
          </div>\
          <div class=\"editar_informacion field-editor\">\
            <label>Nombre:</label> <input id=\"nuevoNombre\"  class=\"text\" value=\"{{label}}\"  placeholder=\"Nombre\" /> \
            <br />\
            <label>Descripción:</label> <input id=\"nuevoDescripcion\"  class=\"text\" value=\"{{description}}\"  placeholder=\"Descripción\" /> \
            <br />\
            <label>Mínimo:</label> <input  value=\"{{min}}\" id=\"nuevoMin\" /> <br />\
            <label>Máximo:</label> <input  value=\"{{max}}\" id=\"nuevoMax\" />\
          </div>\
        {{/ end }}\
        {{#( type == \"message\" )}}\
          <div class=\"container-field-controls\"> \
            <input type=\"button\" on-click=\"deleteField:{{i}}\" value=\"X\" />\
            <input type=\"button\" on-click=\"moveUp:{{i}}\" value=\"^\" />\
            <input type=\"button\" on-click=\"moveDown:{{i}}\" value=\"v\" />\
          </div>\
          <div class=\"editar_informacion field-editor\">\
            <label>Título:</label> <input value=\"{{title}}\" class=\"text\"  placeholder=\"Título\" /> \
            <br />\
            <label>Contenido:</label> <input class=\"text\" value=\"{{content}}\" placeholder=\"Contenido\" /> \
            <br />\
            <label>Estilo del mensaje:</label> <select value=\"{{style}}\"> <option value=\"normal\">Normal</option> <option value=\"alert-info\">Información (Azul)</option> <option value=\"alert-warning\">Precaución (Amarillo)</option> <option value=\"alert-danger\">Peligro (Rojo) </option> <option value=\"alert-success\">Éxito (Verde)</option> </select> \
          </div> \
        {{/ end }}\
      </div>\
      <hr />\
    {{/fields}}\
  </div>\
  <input type=\"button\" value=\"Agregar campo de texto\" on-click=\"addTextField\" /><input type=\"button\" value=\"Agregar mensaje\" on-click=\"addMessageField\" />\
  <hr />\
  <input class=\"button-primary\" type=\"button\" value=\"Guardar\" on-click=\"done\" />\
</div> \
";
