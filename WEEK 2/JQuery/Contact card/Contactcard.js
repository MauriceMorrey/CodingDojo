$(document).ready(function(){
    alert('You are now working with JQuery!')
    $('h2').click(function(){
        alert('hi');
    })
    $('form').on('click', 'button', function(){
        $('#contact').append($('<div class = "info">'));
            $("#contact div").html("<h2>" + $('First name').val() + " " + $('Last_name').val() + "</h2><p>" + "</p><p> " + "</p><p>Click for description</p>");
			$("#contact").append($("<div class='hidden'>"));
			$("#contact div:nth-child(2)").html("<p>" + $('#description').val() + "</p>");
    })
})