$(function () {
    $("[data-toggle='tooltip']").tooltip();
});

$('#enviarCorreo').click(function(){
    alert('Correo enviado satisfactoriamente');
});

$('h4').on('dblclick', function(){
    this.style.color = 'red';
});

$('.card-title').on('click', function(){
    $('.card-text').toggle();
});