var rappers = ["Snoop Dogg", "Kid Cudi", "A$AP Ferg", "Drake", "De La Soul", "Dipset"];

var favs = [];

var links = [];

var favLinks = [];

var click = false;

$(document).ready(function () {

    $(rappers).each(function addButtons(index, element) {
        $("#buttons").append("<button type='button' class='button btn btn-dark border border-secondary rounded-0' id=" + index + ">" + element + "</button>");
    });

    buttonClick();

    function buttonClick() {
        $(".button").on("click", function () {
            var q = $(this).text();

            var query = "https://api.giphy.com/v1/gifs/search?api_key=gExGz1op3rDKAfukLQUSgqIyMQQbKeWr&q=" + q + "&limit=11&offset=0&rating=G&lang=en";

            $.ajax({
                url: query,
                method: "GET"
            }).then(function (response) {
                var results = response.data;

                $(results).each(function (index, element) {
                    //create div element to hold each gif
                    var gifDiv = $("<div class='space'>");
                    //get rating from api and store it as variable
                    var rating = results[index].rating;
                    //create p element and add the rating to it
                    var p = $("<p>").text("Rating: " + rating);
                    //image element is created here
                    var gif = $("<img>");
                    //number of frames in gif
                    var frames = results[index].images.original.frames;
                    var p1 = $("<p>").text("Number of frames: " + frames);

                    //download
                    var a = $("<a>");
                    a.attr("href", results[index].images.fixed_height.url);
                    a.attr("download", "text.gif");
                    a.text("click to download");

                    //favs
                    var b = $("<button>");

                    b.attr("class", "btn btn-success border border-secondary rounded-0");
                    b.text("Fav this gif");
                    b.attr("id", "fav");

                    //source url for image from api (still by default)
                    var srcURL = results[index].images.fixed_height_still.url;
                    //source animated url for image from api
                    var animateURL = results[index].images.fixed_height.url;
                    //source still url for image from api
                    var stillURL = results[index].images.fixed_height_still.url;

                    //attributes are added to image from the previous variables
                    gif.attr("src", srcURL);
                    //gif.attr("data-state", "still");
                    gif.attr("data-still", stillURL);
                    gif.attr("data-animate", animateURL);
                    gif.attr("data-state", "still");

                    //everything is then added to image divs
                    gifDiv.prepend(gif);
                    gifDiv.append(p);
                    gifDiv.append(p1);
                    gifDiv.append(b);

                    if (index <= 4) {
                        $("#gifsLeft").prepend(gifDiv);
                    } else if (index > 5) {
                        $("#gifsRight").prepend(gifDiv);
                    }

                    $(b).on("click", function () {
                        $(gifDiv).remove();
                        //selecting the whole array for the gif faved
                        var elem = gif[0];
                        //pushing array to favs array
                        favs.push(elem);

                        //selecting the element from each of the arrays
                        var outers = elem.outerHTML;
                        //pushing them to links array, so that it can be JSON'ed for locacStorage
                        links.push(outers);

                        localStorage.getItem("rappers");

                        var string = JSON.stringify(links);
                        localStorage.setItem("rappers", string);
                        console.log(string);

                    });

                    $(gif).on("click", function () {
                        console.log(this);
                        var state = $(this).attr("data-state");

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

    $("#favSection").on("click", function () {
        $("#gifsLeft").html("");
        $("#gifsRight").html("");

        var retrieve = localStorage.getItem("rappers");
        var favs2 = JSON.parse(retrieve);
        console.log(favs2);

        $(favs2).each(function (index, element) {
            console.log(element);
            var gifDiv = $("<div class='space'>");
            gifDiv.append(element);
            if (index % 2) {
                console.log("even");
                console.log(element);
                $("#gifsRight").prepend(gifDiv);
            } else {
                console.log("odd");
                console.log(element);
                $("#gifsLeft").prepend(gifDiv);
            }
        });

    });

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
            $("#buttons").append("<button type='button' class='button capitalize btn btn-dark border border-secondary rounded-0' id=" + index + ">" + last + "</button>");
            click = false;
            buttonClick();
        };
    }

    $("#clear").on("click", function() {
        $("#gifsLeft").html("");
        $("#gifsRight").html("");
    })
});