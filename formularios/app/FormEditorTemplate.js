var FormEditorTemplate= "\
<div intro='slide' class=\"editar_formulario\">\
  <h4>Editar Formulario</h4>\
  <div class=\"editar_informacion\" >\
    <label>Título:</label> <input  class=\"text\"  value=\"{{title}}\" placeholder=\"Título\" /> <br /> \
    <label>Información:</label> <input  class=\"text\"  value=\"{{info}}\" placeholder=\"Información\" /> \
  </div>\
  <h4>Campos en este formulario:</h4><hr />\
\
  <table><tbody>\
  {{#.fields:i}}\
    <tr class=\"campo\">\
      <td>{{ (.update? abstract(i): abstract(i) ) }}</td> \
      <td>\
        <input type=\"button\" on-click=\"editField:{{i}}\" value=\"Editar\" />\
        <input type=\"button\" on-click=\"deleteField:{{i}}\" value=\"Borrar\" />\
        <input type=\"button\" on-click=\"moveUp:{{i}}\" value=\"^\" />\
        <input type=\"button\" on-click=\"moveDown:{{i}}\" value=\"v\" />\
      </td>\
    </tr>\
  {{/.fields}}\
  </tbody></table>\
    \
  <div id=\"nuevoCampo\" class=\"editar_informacion\">\
    <h4>Agregar un nuevo campo</h4>\
    <select value=\"{{newType}}\"> \
    {{types.length}}\
      {{#types}}\
        <option value=\"{{name}}\">{{title}}</option>\
      {{/types}}\
    </select> <input class=\"button-primary\" type=\"button\" value=\"Crear\" on-click=\"newField\" />\
  </div>\
</div>\
";
