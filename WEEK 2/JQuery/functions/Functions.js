$(document).ready(function(){
    alert('You are now working with JQuery!')
    $('p').click(function(){
        alert('hi');
    })

    $('p').hide(); //effets methods toggle the visibility of an item e.g.hide and show

    $('h1').click(function(){
        alert('This ia a tongue twister');
    })
    $('#hide').click(function(){
        $('p').hide();
        $('h3').text('You will never tie a tie like Kantai')//setter function sets the value of something
    })
    $('#show').click(function(){
        $('p').show();
        var myT = $('p').text();//this is a getter;it gets the value of something
        alert(myT);
    })
    $('h1').hover(function(){//manipulation methods add/change html/text to your document e.g hover and append
        $('h3').text('Ask Kantai for help');
    },function(){$('h3').text('Tie still not tied')})
    $('.append').click(function(){
        $('h3').append('<h4>.append adds HTML!</h4>');
    })
    $('button').click(function(){
        $('button').css('background-color','blue');
    })
    $('h1').click(function(){
        $('h1').toggle();
    })
    $('h1').click(function(){
        $('#par').slideDown();
    })
    $('h3').click(function(){
        $('h3').fadeIn('slow');
    })
    $('p').addClass('my class your class');
});