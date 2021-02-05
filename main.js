/* TASK 1 */

// Ocultar y mostrar div
$(document).ready(function(){
    $("#mostrar").click(function() {
        $('.form-group').toggle(); //mostrar/esconder form
     });
});

/* TASK 2 */

$(document).ready(function() {
    $('#email-validator').click(function(){
        if($("#nombre").val().indexOf('@', 0) == -1 || $("#nombre").val().indexOf('.', 0) == -1) {
            alert('El correo electrónico introducido no es correcto.');
            return false;
        }
        alert('El email introducido es correcto.');
    });
})