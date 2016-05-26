var correct = 0;

$(document).ready(function() {
  var answers = new Array();

  // hide all the endings
  $.each($(".ending"), function(index, item) {
    $(item).css("visibility", "hidden");
  });

  $("#no-ending").css("visibility", "visible");

  // click listener
  $(".item a").click(function() {

    // mark choice
    $(this).parent().addClass("choice");

    // check if thing clicked has answer class
    if ($(this).hasClass("answer")) {
      console.log("correct");
      $(this).next().addClass("correct");
    } else {
      console.log("incorrect");
      $(this).next().addClass("incorrect");
    }

    // figure out what option was clicked
    var children = $(this).parent().parent().children();
    var i = 0;
    $.each(children, function(i, child) {
      // console.log($(child));
      if ($(child).hasClass("choice")) {
        // answers.push(i)
        addAnswer(i, answers);
        correct ++;
        return;
      }
    });

    console.log(answers);
    console.log(correct);

  });
});

function addAnswer(index, array) {
  array.push(index);

    if (array.length >= 19) {
      console.log("halleluah");
      $("#no-ending").css("visibility", "hidden");
      if (correct >= 14) {
        $("#ending1").css("visibility", "visible");
      } else if (correct >= 8 && correct <14) {
        $("#ending2").css("visibility", "visible");
      } else if (correct < 8) {
        $("#ending3").css("visibility", "visible");
     }
    }
}