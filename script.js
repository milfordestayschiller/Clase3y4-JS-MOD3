
//$(document).ready(function() {

/*
$.ajax({
    type: "GET",
    url: "https://api.chucknorris.io/jokes/random",
    dataType: "json",
    success: function (data) {
        $('#test').append(
            `<p>${data.value}</p>`);
         }})
   
    })
*/

//getJSon solicitado en el ejercicio

$.getJSON("https://api.chucknorris.io/jokes/random", function (data) {
    $("#norris").text(data.value)

})



