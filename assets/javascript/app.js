var rappers = ["Snoop Dogg", "Eazy E", "Wiki", "A$AP Ferg", "Death Grips", "Juicy J", "YBN Cordae", "Mac Miller", "Playboi Carti", "Rae Sremmurd", "DOOM", "Waka Flocka Flame"];

var search = $("#rapper").val();
console.log(search);

$(document).ready(function () {

    $(rappers).each(function(index, element) {
        console.log("this is:" + index + element);
        $("#buttons").append("<button type='button' class='btn btn-dark'>" + element + "</button>");
    });

    $("#submit").on("click", function() {
        event.preventDefault();
        console.log(this);
    });

    function addRapper() {

    }
});