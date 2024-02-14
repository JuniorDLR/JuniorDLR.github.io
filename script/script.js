$(document).ready(function () {

    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var message = $("#message");
    var leftImage = $("#leftImage");
    var rightImage = $("#rightImage");

    envelope.click(function () {
        open();
    });
    btn_open.click(function () {
        open();
        message.show(); // Mostrar el mensaje al abrir el sobre
        leftImage.show(); // Mostrar la imagen izquierda
        rightImage.show(); // Mostrar la imagen derecha
    });
    btn_reset.click(function () {
        close();
        message.hide(); // Ocultar el mensaje al cerrar el sobre
        leftImage.hide(); // Ocultar la imagen izquierda
        rightImage.hide(); // Ocultar la imagen derecha
    });

    function open() {
        envelope.addClass("open")
            .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
            .removeClass("open");
    }

});