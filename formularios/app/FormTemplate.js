var FormTemplate= "\
<h2 class=\"text-center\">{{title}}</h2>\
{{#info}}\
  <div class=\"well\"><p>{{info}}</p></div>\
{{/info}}\
<input value=\"{{title}}\" type=\"hidden\" name=\"title\"/>\
\
<input value=\"{{fields.length}}\" type=\"hidden\" name=\"fieldsLength\"/>\
{{#fields:i}}\
    <!-- TypePartial -->\
{{/fields}}\
\
";
