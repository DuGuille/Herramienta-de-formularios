<?php
/*
  Plugin Name: Herramienta para formularios
  Plugin URI: http://www.katwix.com/wp
  Description: Manejar formularios usando Ractive.js
  Author: Guillermo Ambrosio <lgar89@gmail.com>
  Version: 1.0
  Author URI: http://www.katwix.com/wp

  GNU General Public License, Free Software Foundation <http://creativecommons.org/licenses/GPL/2.0/>

  This program is free software; you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation; either version 2 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program; if not, write to the Free Software
  Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA

*/

// Mostrar el formulario de administración
function herramienta_escritores_plugin_menu(){
    add_management_page("Herramienta para formularios", "Herramienta para formularios", "administrator", "herramienta_forms_menu", "herramienta_escritores_options");
}

function herramienta_escritores_admin_init() {
    /* Register our stylesheet. */
    wp_register_style( 'herramienta_forms_css', plugins_url('plugin.css', __FILE__) );
    wp_enqueue_style('herramienta_forms_css');
}

add_action( 'admin_enqueue_scripts', 'herramienta_escritores_admin_init' );
add_action('admin_menu','herramienta_escritores_plugin_menu');

function herramienta_escritores_options(){

  if (isset($_POST["herramienta_escritores_post"])) {
    // Ensure this is not an accidental empty form post. Minimum is {}, two characters
    if (strlen($_POST["herramienta_escritores_formularios"]) >= 2 ) { 
      wlo_update_option("herramienta_escritores_habilitado", (isset($_POST["herramienta_escritores_habilitado"]))?"1":"0");
      wlo_update_option("herramienta_escritores_titulo", $_POST["herramienta_escritores_titulo"]);
      wlo_update_option("herramienta_escritores_email", $_POST["herramienta_escritores_email"]);
      wlo_update_option("herramienta_escritores_formularios", $_POST["herramienta_escritores_formularios"]);
    }
  }

  ?>
  <div class="wrap">
  <h2>Herramienta para formularios</h2>

  <form id="herramienta_escritores_form" method="post">
      <input type="hidden" name="herramienta_escritores_post" value="1" />
      <table class="form-table">
          <tr valign="top">
            <th scope="row">Habilitar herramienta</th>
            <td><input type="checkbox" name="herramienta_escritores_habilitado" <?php echo (wlo_get_option("herramienta_escritores_habilitado")=="1")?"checked='checked'":""; ?> /></td><td></td>
          </tr>
      
          
          <tr valign="top">
            <th scope="row">Título público (dejar en blanco para que no aparezca un título)</th>
            <td><input type="text" name="herramienta_escritores_titulo" value="<?php echo wlo_get_option("herramienta_escritores_titulo"); ?>" /></td><td></td>
          </tr>
          
          <tr valign="top">
            <th scope="row">Email receptor <br /> (Para múltiples e-mails, separar por coma) </th>
            <td><input type="text" name="herramienta_escritores_email" value="<?php echo wlo_get_option("herramienta_escritores_email"); ?>" /></td><td></td>
          </tr>
          
          <tr valign="top">
            <th scope="row">Formularios</th>
            <td>
                  <input id="jsondata" name="herramienta_escritores_formularios" type="hidden" /> 
                  <div id="forms">
                  </div>
            </td><td>
                  <div id="form">
                  </div>
                  <div id="field">
                  </div>
            </td>
          </tr>
      </table>
      <hr />
      <input type="submit" value="Guardar" />

      <script id="manejarForms" type="ractive/text"> 
        {{#.:i}}
          <div class="formulario"> {{title}} - {{fields.length}} campos. <input  type="button" on-click="editarForm:{{i}}" value="Editar" /> <input type="button" on-click="borrarForm:{{i}}" value="Borrar" /> 
          <br />
          Link a este formulario: <a target="_blank" href="http://hostname.com/formularios/index.php?key={{id}}">http://hostname.com/formularios/index.php?key={{id}}</a>
          </div>
        {{/.}}
        <div id="nuevoForm" class="editar_informacion">
          <h4>Agregar un nuevo formulario</h4>
          <label>Título:</label> <input  class="text"  id="nuevoTitulo" placeholder="Título" /> <br />
          <label>Información:</label> <input  class="text"  id="nuevoInfo" placeholder="Información" /> <hr />
          <input  class="button-primary" type="button" value="Crear" on-click="nuevoForm" />
        </div>
      </script>

  <script src="../formularios/js/jquery-1.11.0.min.js"></script>
  <script src="../formularios/js/Ractive.js"></script>
  <script src='../formularios/js/Ractive-transitions-slide.js'></script>

  <!-- App sources -->
    <script src="../formularios/app/FormEditorTemplate.js"></script>
    <script src="../formularios/app/FormEditor.js"></script>
      <script src="../formularios/app/fieldTypes/SimpleTextEditTemplate.js"></script>
      <script src="../formularios/app/fieldTypes/SimpleTextEditor.js"></script>
      <script src="../formularios/app/fieldTypes/MessageEditTemplate.js"></script>
      <script src="../formularios/app/fieldTypes/MessageEditor.js"></script>
      <script src="../formularios/app/fieldTypes/ContainerEditTemplate.js"></script>
      <script src="../formularios/app/fieldTypes/ContainerEditor.js"></script>
      <script src='../formularios/app/fieldTypes/NameEditTemplate.js' ></script>
      <script src='../formularios/app/fieldTypes/NameEditor.js' ></script>
      <script src='../formularios/app/fieldTypes/EmailEditTemplate.js' ></script>
      <script src='../formularios/app/fieldTypes/EmailEditor.js' ></script>
  <!-- End app sources -->

  <script>

  forms = <?php 
    echo wlo_get_option("herramienta_escritores_formularios");
  ?>;
  
  // Generic unique random id generator
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
             .toString(16)
             .substring(1);
  }
  function genGUID() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }
  
  var formsGUI = new Ractive({
    el: "forms",
    template: "#manejarForms",
    data:forms
  });
  formsGUI.on({
    nuevoForm: function (e) {
      var nuevo = {title: $("#nuevoTitulo").prop("value"), info: $("#nuevoInfo").prop("value"), id: genGUID(), fields: [] };
      $("#nuevoTitulo").prop("value", "");  
      $("#nuevoInfo").prop("value", "");
      if (nuevo.title == "") return;
      
      forms.push(nuevo);
    },
    borrarForm: function (e, i) {
      if (confirm("Desea borrar este formulario?"))
        forms.splice(i,1);
    },
    editarForm: function (e,i) {
      manejarFormulario(i);
    }
  });
  
 
  var formRactive = null;

  function manejarFormulario(index) {
    if (formRactive != null) {
      if (formRactive.fieldEditor) {
        alert("Guarde el campo para continuar.");
        return;
      } else {
        formRactive.teardown();
      }
    }
    
    // just in case, it was left with the hidden class.
    $("#form").removeClass("hidden");
      
    formRactive = FormEditor.initialize("form", "field", forms[index]);
    // Hide the form editor before editing a field.
    formRactive.beforeEditField = function () { 
      $("#form").addClass("hidden");
    };
    formRactive.doneEditField = function (event) {
      if (event == false) {
        alert("Ingrese la información del campo para continuar.");
        return;
      }
      formRactive.fieldEditor.teardown();
      delete formRactive.fieldEditor;
      $("#form").removeClass("hidden");
    }
  }
  
  $("#herramienta_escritores_form").submit(function() {
      if (formRactive.fieldEditor) {
        alert("Guarde el campo para continuar.");
        return false;
      }
      $("#jsondata").prop("value", JSON.stringify(forms));
  });
    
  // avoid submit on enter
  $('form').bind("keyup keypress", function(e) {
    var code = e.keyCode || e.which; 
    if (code  == 13) {               
      e.preventDefault();
      return false;
    }
  });
  
  </script>
  
  </form>
  </div>
  <?php 
}