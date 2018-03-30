$(document).ready(function(){
    alert('You are now working with JQuery!')
    $('h1').click(function(){
        alert('POKEMON GO! GO! GO!');
    })
    for (var i = 1; i <= 151; i++) {
        $('#poke').append('<img src="https://pokeapi.co/api/v2/pokemon/1/' + i + '.png">');
    }
})