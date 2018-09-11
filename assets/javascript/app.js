var rappers = ["Snoop Dogg", "Eazy E", "Wiki", "A$AP Ferg", "Death Grips", "Juicy J", "YBN Cordae", "Mac Miller", "Playboi Carti", "Rae Sremmurd", "DOOM", "Waka Flocka Flame"];

var click = false;



$(document).ready(function () {

    $(rappers).each(function addButtons(index, element) {
        $("#buttons").append("<button type='button' class='btn btn-dark' id=" + index + ">" + element + "</button>");
    });

    buttonClick();

    function buttonClick() {
        $(".btn").on("click", function () {
            var q = $(this).text();

            var query = "https://api.giphy.com/v1/gifs/search?api_key=gExGz1op3rDKAfukLQUSgqIyMQQbKeWr&q=" + q + "&limit=10&offset=0&rating=G&lang=en";

            $.ajax({
                url: query,
                method: "GET"
            }).then(function (response) {
                var results = response.data;
                console.log(results);
                console.log(results[4]);
                var gif = $("<img>");

            });
        });
    }

    $("#submit").on("click", function () {
        event.preventDefault();
        addRapper();
    });

    function addRapper() {
        click = true;
        console.log(click);
        var search = $("#rapper").val();
        console.log(search);
        rappers.push(search);

        if (click === true) {
            console.log(rappers);
            var last = rappers[rappers.length - 1];
            var index = rappers.indexOf(last);
            console.log(last);
            $("#buttons").append("<button type='button' class='btn btn-dark' id=" + index + ">" + last + "</button>");
            click = false;
            buttonClick();
        };
    }
});