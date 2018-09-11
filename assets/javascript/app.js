var rappers = ["Snoop Dogg", "N.W.A.", "Kid Cudi", "A$AP Ferg", "Death Grips", "Kanye West", "Playboi Carti", "Rae Sremmurd"];

var click = false;



$(document).ready(function () {

    $(rappers).each(function addButtons(index, element) {
        $("#buttons").append("<button type='button' class='button btn btn-dark' id=" + index + ">" + element + "</button>");
    });

    buttonClick();

    function buttonClick() {
        $(".button").on("click", function () {
            var q = $(this).text();

            var query = "https://api.giphy.com/v1/gifs/search?api_key=gExGz1op3rDKAfukLQUSgqIyMQQbKeWr&q=" + q + "&limit=10&offset=0&rating=G&lang=en";

            $.ajax({
                url: query,
                method: "GET"
            }).then(function (response) {
                var results = response.data;

                $(results).each(function (index) {
                    var gifDiv = $("<div class='text-center'>");
                    var rating = results[index].rating;
                    var p = $("<p>").text("Rating: " + rating);

                    var src = results[index].images.fixed_height_still.url;
                    var animate = results[index].images.fixed_height.url;
                    var still = results[index].images.fixed_height_still.url;
                    var state = "still";

                    var gif = $("<img>");

                    gif.attr("src", src);
                    gif.attr("data-state", state);
                    gif.attr("data-still", still);
                    gif.attr("data-animate", animate);

                    gifDiv.prepend(p);
                    gifDiv.prepend(gif);

                    $("#gifs").prepend(gifDiv);

                    $(gif).on("click", function () {
                        if (state == "animate") {
                            $(this).attr("src", still);
                            $(this).attr("data-state", "still");
                            console.log(this);
                        }

                        // if (state == "still") {
                        //     $(this).attr("src", animate);
                        //     $(this).attr("data-state", "animate");
                        //     console.log(this);
                        //     console.log(state);
                        // } else {
                        //     $(this).attr("src", still);
                        //     $(this).attr("data-state", "still");
                        //     console.log(this);
                        // }

                    });

                    console.log(gif);
                });

            });
        });
    }

    $("#submit").on("click", function () {
        event.preventDefault();
        addRapper();
    });

    function addRapper() {
        click = true;
        var search = $("#rapper").val();
        console.log(search);
        rappers.push(search);

        if (click === true) {
            console.log(rappers);
            var last = rappers[rappers.length - 1];
            var index = rappers.indexOf(last);
            $("#buttons").append("<button type='button' class='button capitalize btn btn-dark' id=" + index + ">" + last + "</button>");
            click = false;
            buttonClick();
        };
    }
});