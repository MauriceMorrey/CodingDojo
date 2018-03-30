$(document).ready(function() {
    alert('you are live')
    $('img').click(function() {
        var url = 'https://anapioficeandfire.com/api/houses/' + $(this).attr('id') + '/';
        //code here (build up your url)
        $.get(url, function(res) {
            //code here
            console.log(res);
            var titles = "<p>Titles: " + res.titles[0];
            for (var i = 1; i < res.titles.length; i++) {
                titles += ", " + res.titles[i];
            }
            titles += "</p>";
            $('#details').html(
                "<p>Name: " + res.name + "</p>" +
                "<p>Words: " + res.words + "</p>" +
                titles
            )
        }, 'json');
        // don't forget to return false so page doesn't refresh
        return false;
    });
});