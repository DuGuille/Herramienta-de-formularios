var MessageTemplate= "\
<div class=\" {{(style == 'normal'? 'well': style + ' alert')}} \"> \
  {{# (.title && .title != \"\") }}\
    <p class=\"message-title\"><strong>{{.title}}</strong></p><hr />\
  {{/ end }}\
  {{content}}\
</div> \
";
