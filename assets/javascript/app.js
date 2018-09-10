var rappers = ["Snoop Dogg", "Eazy E", "Wiki", "A$AP Ferg", "Death Grips", "Juicy J", "YBN Cordae", "Mac Miller", "Playboi Carti", "Rae Sremmurd", "DOOM", "Waka Flocka Flame"];

var click = false;


$(document).ready(function () {

    $(rappers).each(function addButtons(index, element) {
        $("#buttons").append("<button type='button' class='btn btn-dark'>" + element + "</button>");
    });

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
            $("#buttons").append("<button type='button' class='btn btn-dark'>" + last + "</button>");
            click = false;
        };
    }

});