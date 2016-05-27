var correct = 0;
var total = 0;

$(document).ready(function() {

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
      // console.log("correct");
      $(this).next().addClass("correct");
    } else {
      // console.log("incorrect");
      $(this).next().addClass("incorrect");

      $.each($(this).parent().parent().children().children("a"), function(i, sibling) {
        if ($(sibling).hasClass("answer")) {
          $(sibling).next().addClass("correct");
        }
      });
    }

    // figure out what option was clicked
    var children = $(this).parent().parent().children();

    total ++;
    $.each(children, function(i, child) {
      $(child).addClass("old");
      if ($(child).hasClass("choice") && $(child).children("a").hasClass("answer")) {
        addCorrect();
        return;
      }
    });

    console.log("Total: " + total);
    console.log("Correct: " + correct);

  });
});

function addCorrect() {
  correct ++;
  console.log("hi");

  if (total >= 19) {
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