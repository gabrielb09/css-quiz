var correct = 0;
var total = 0;

$(document).ready(function() {

  $(".ending").addClass("ending-none");

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

    $.each(children, function(i, child) {
      $(child).addClass("old");
      if ($(child).hasClass("choice") && $(child).children("a").hasClass("answer")) {
        correct ++;
        return;
      }
    });

    addTotal();

    console.log("Total: " + total);
    console.log("Correct: " + correct);

  });
});

function addTotal() {
  total ++;

  if (total >= 19) {
    console.log("halleluah");
    $(".ending").removeClass("ending-none");
    if (correct >= 14) {
      $(".ending").addClass("ending-one");
    } else if (correct >= 8 && correct < 14) {
      $(".ending").addClass("ending-two");
    } else if (correct < 8) {
      $(".ending").addClass("ending-three");
    }
  }
}