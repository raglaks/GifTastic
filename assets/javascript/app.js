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
            var lower = q.toLowerCase();
            console.log(lower);
            // var query = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=gExGz1op3rDKAfukLQUSgqIyMQQbKeWr&limit=10&offset=0&rating=G&lang=en";
            // console.log(query);

            var test = "https://api.giphy.com/v1/gifs/search?api_key=gExGz1op3rDKAfukLQUSgqIyMQQbKeWr&q=" + q + "&limit=10&offset=0&rating=G&lang=en";

            $.ajax({
                url: test,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                var gifs = 
            });
        });
    }

    // $(".btn").on("click", function () {
    //     var key="api_key=gExGz1op3rDKAfukLQUSgqIyMQQbKeWr&";
    //     var q = $(this).text();
    //     var query = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key=" + key + "limit=10&offset=0&rating=G&lang=en";
    //     console.log(q);

    //"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5"

    // $.ajax({
    //     url: query,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);
    // });
    // });

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