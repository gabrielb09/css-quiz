
$(document).ready(function() {
  $(".item div.answer").click(function() {
    var classList = $(this).attr('class').split(/\s+/);
    if ($.inArray("answer", classList) != -1) {
      console.log ("correct");
    }
  });
});