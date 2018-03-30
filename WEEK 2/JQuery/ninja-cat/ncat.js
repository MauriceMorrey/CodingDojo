$(document).ready(function(){
    alert('You are now working with JQuery!')
    $('h1').click(function(){
        alert('This is a cool puzzle!');
    })
    $('#boss img').click(function(){
        Ninja = $(this).attr('data-alt-src');
        $(this).attr('data-alt-src',$(this).attr('src'));
        $(this).attr('src',Ninja);
        
    })
})