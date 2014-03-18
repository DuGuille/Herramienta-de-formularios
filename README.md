Formularios
===========

Esta herramienta está basada en la librería Ractive.js ( http://www.ractivejs.org/ ). Consiste de un plugin para wordpress para editar los formularios y de un visor de formularios público. El sistema para editar y visualizar los formularios es extensible. Basta con agregar en formularios/app/fieldTypes/ los archivos del nuevo campo. Ver por ejemplo, los archivos Name.js, NameEditor.js, NameEditTemplate.mustache y NameTemplate.mustache.

Los archivos javascript deben incluirse en el html tanto del plugin de wordpress como de la página pública para visualizar formularios, como puede verse con los tipos de campos ya incluidos. 

Los tipos de campos ya incluidos son:

- SimpleText
- Name
- Message
- Email
- Container

Este es el demo del editor: https://rawgithub.com/DuGuille/Herramienta-de-formularios/master/wordpress%20plugin/demo.html

Este es el demo del llenador de los formularios:  https://rawgithub.com/DuGuille/Herramienta-de-formularios/master/formularios/demo.html
