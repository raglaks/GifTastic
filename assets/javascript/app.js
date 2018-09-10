var rappers = ["Snoop Dogg", "Eazy E", "Wiki", "A$AP Ferg", "Death Grips", "Juicy J", "YBN Cordae", "Mac Miller", "Playboi Carti", "Rae Sremmurd", "DOOM", "KKB", "Waka Flocka Flame"];

$(document).ready(function () {
    $(rappers).each(function(index, element) {
        console.log("this is:" + index + element);
        $("#buttons").append("<button type='button' class='btn btn-dark'>" + element + "</button>");
    });

    function addRapper() {
        
    }
});