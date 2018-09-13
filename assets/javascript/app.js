var rappers = ["Snoop Dogg", "Kid Cudi", "A$AP Ferg", "Death Grips", "Kanye West", "Dipset"];

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
                    //create div element to hold each gif
                    var gifDiv = $("<span>");
                    //get rating from api and store it as variable
                    var rating = results[index].rating;
                    //create p element and add the rating to it
                    var p = $("<span>").text("Rating: " + rating);
                    //image element is created here
                    var gif = $("<img>");

                    //source url for image from api (still by default)
                    var srcURL = results[index].images.fixed_width_still.url;
                    //source animated url for image from api
                    var animateURL = results[index].images.fixed_width.url;
                    //source still url for image from api
                    var stillURL = results[index].images.fixed_width_still.url;

                    //state string variable is set here
                    //var still = "still";
                    //var animate = "animate";

                    //attributed are added to image from the previous variables
                    gif.attr("src", srcURL);
                    //gif.attr("data-state", "still");
                    gif.attr("data-still", stillURL);
                    gif.attr("data-animate", animateURL);
                    gif.attr("data-state", "still");


                    //everything is then added to image divs
                    
                    gifDiv.prepend(gif);

                    //gifDiv is then added to the DOM ID
                    $("#gifs").prepend(gifDiv);

                    $(gif).on("click", function () {
                        console.log(this);
                        var state = $(this).attr("data-state");
                        gifDiv.append(p);
                        console.log(state);
                        if (state == "still") {
                            $(this).attr("src", animateURL);
                            $(this).attr("data-state", "animate");
                        } else {
                            $(this).attr("src", stillURL);
                            $(this).attr("data-state", "still");
                        }

                    });

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