$(function () {
    $("[data-toggle='tooltip']").tooltip();
});

$('h2').on('dblclick', function(){
    this.style.color = 'red';
});

$('.card-title').on('click', function(){
    $('.card-text').toggle();
});