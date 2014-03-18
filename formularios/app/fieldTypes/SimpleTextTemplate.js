var SimpleTextTemplate= "\
{{#(max <= 100)}}\
  <div class=\"form-horizontal well\">\
    <div class=\"form-group\">\
      <label for=\"inputName\" class=\"col-sm-2 control-label\">{{label}} <br />\
      </label>\
      <div class=\"col-sm-9\">\
        <input value=\"{{.label}}\" type=\"hidden\" name=\"title-{{.prefix}}{{.index}}\"/>\
        <input title=\"Máximo {{.max}}, mínimo {{.min}}\" type=\"text\"  maxlength=\"{{.max}}\" data-index=\"{{.index}}\" on-keyup=\"checkValid\" class=\"tooltip-on-focus form-control\" name=\"{{ (inputName? inputName: \"campo-\" + .prefix + .index) }}\" data-min=\"{{.min}}\" data-max=\"{{.max}}\" placeholder=\"{{description}}\">\
      </div>\
      {{#validField}}\
          <div class=\"col-sm-1\"><span class=\"label label-success\"><i class=\"glyphicon glyphicon-ok\"></i></span></div>\
      {{/validField}}\
      {{^validField}}\
          <div class=\"col-sm-1\"><span class=\"label label-danger\"><i class=\"glyphicon glyphicon-exclamation-sign\"></i></span></div>\
      {{/validField}}      \
    </div>\
    <div style=\"overflow:hidden;\" class=\"text-muted panel-footer\"> \
      {{#(min>.cars)}} <span class=\"label label-text label-danger\"> Faltan {{min-.cars}} caracteres</span> {{/ end }} \
      {{^(min>.cars)}} \
          {{#(max>.cars)}} <span class=\"label label-text label-success\"> Quedan {{max-.cars}} caracteres </span> {{/ end inner }}\
      {{/ end outer}}\
      {{#(max < .cars)}} <span class=\"label label-text  label-danger\">  Se ha pasado del máximo de caracteres, {{.cars}} </span>{{/ end }} \
      <div class=\"pull-right\" >Mínimo {{min}}, máximo {{max}} -  {{.cars?.cars:0}}</div>\
    </div>\
  </div>\
{{/ end}}\
{{^(max <= 100)}}\
  <div class=\"panel panel-default\">\
    <div class=\"panel-heading\">\
      <h3 class=\"panel-title\">{{.label}}\
        {{#.validField}}\
          <span class=\"pull-right label label-success\">\
            <i class=\"glyphicon glyphicon-ok\"></i>\
          </span>\
        {{/.validField}}\
                              \
        {{^.validField}}\
          <span class=\"pull-right label label-danger\">\
            <i class=\"glyphicon glyphicon-exclamation-sign\"></i>\
          </span>\
        {{/.validField}}\
        \
      </h3>\
    </div>\
    <div class=\"panel-body\">\
      <div class=\"form-group  {{^validField}}has-error {{/validField}} {{#validField}}has-success{{/validField}}\">\
        <input value=\"{{.label}}\" type=\"hidden\" name=\"title-{{.prefix}}{{.index}}\"/>\
        <textarea maxlength=\"{{.max}}\" placeholder=\"{{description}}\" data-index=\"{{.index}}\" rows=\"4\" on-keyup=\"checkValid\" class=\"form-control \"  name=\"{{ (inputName? inputName: \"campo-\"+.prefix+.index) }}\" data-min=\"{{min}}\" data-max=\"{{max}}\">\
        {{predefinedContent}}\
        </textarea>\
      </div>\
    </div>\
    <div style=\"overflow:hidden;\" class=\"text-muted panel-footer\"> \
      {{#(min>.cars)}} <span class=\"label label-text label-danger\"> Faltan {{min-.cars}} caracteres</span> {{/ end }} \
      {{^(min>.cars)}} \
          {{#(max>.cars)}} <span class=\"label label-text label-success\"> Quedan {{max-.cars}} caracteres </span> {{/ end inner }}\
      {{/ end outer}}\
      {{#(max < .cars)}} <span class=\"label label-text  label-danger\">  Se ha pasado del máximo de caracteres, {{.cars}} </span>{{/ end }} \
      <div class=\"pull-right\" >Mínimo {{min}}, máximo {{max}} -  {{.cars?.cars:0}}</div>\
    </div>\
  </div>\
{{/ end}} \
";
