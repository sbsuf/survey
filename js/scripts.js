$(document).ready(function() {
  $("form").submit(function(event) {
    var personName = $("input#fullname").val();
    $(".first").text(personName);
    var favFood = $("#favFood").val();
    $(".second").text(favFood);
    var music = $("input:radio[name=genre]:checked").val();
    $(".third").text(music);
    event.preventDefault();
  });
});
