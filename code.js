$(document).ready(function() {
$("#calcbutton").click(function () {
    var beerac = $("#beers").val() * 0.54;
    var wineac = $("#wine").val() * 0.6;
    var shotsac = $("#shots").val() * 0.6;
    var total = beerac + wineac + shotsac;
    var absorp = total * 7.5;
    var weight = $("#weight").val();
    total = absorp/weight;
    var hours = $("#hours").val();
    total = total - (hours * 0.015);
    var totalfixed = total.toFixed(3);
    $("#res").text("Your BAC is: " + totalfixed + "%");

});



});