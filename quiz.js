
$(document).ready(function() {
  var answers = new Array();

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
        answers.push(i)
        return;
      }
    });

    console.log(answers);

  });

});