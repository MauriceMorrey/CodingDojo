$(document).ready(function() {
    alert('you are live')
    $('img').click(function() {
        var url = 'https://anapioficeandfire.com/api/houses/' + $(this).attr('id') + '/';
        //code here (build up your url)
        $.get(url, function(house) {
            //code here
            console.log(house);
            var titles = "<p>Titles: " + house.titles[0];
            for (var i = 1; i < house.titles.length; i++) {
                titles += ", " + house.titles[i];
            }
            titles += "</p>";
            $('#details').html(
                "<p>Name: " + house.name + "</p>" +
                "<p>Words: " + house.words + "</p>" +
                titles
            )
        }, 'json');
        // don't forget to return false so page doesn't refresh
        return false;
    });
});