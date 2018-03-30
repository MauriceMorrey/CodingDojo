$(document).ready(function(){
    alert('You are now working with JQuery!')
    $('#wrapper h1').click(function(){
        alert('hi');
    })
    $('#pic img').click(function(){
        $(this).hide();
    })
    $('button').click(function(){
        $('img').show();
    })
})