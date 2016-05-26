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

  if (array.length == 2) {
    // console.log("uh-oh");
    // if (areArraysEqual(array, [1,2])) {
    //   console.log("your great!");
    // }
    if (array.length >= 2) {
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
}

function areArraysEqual(array1, array2) {
   var temp = new Array();
   if ( (!array1[0]) || (!array2[0]) ) { // If either is not an array
      return false;
   }
   if (array1.length != array2.length) {
      return false;
   }
   // Put all the elements from array1 into a "tagged" array
   for (var i=0; i<array1.length; i++) {
      key = (typeof array1[i]) + "~" + array1[i];
   // Use "typeof" so a number 1 isn't equal to a string "1".
      if (temp[key]) { temp[key]++; } else { temp[key] = 1; }
   // temp[key] = # of occurrences of the value (so an element could appear multiple times)
   }
   // Go through array2 - if same tag missing in "tagged" array, not equal
   for (var i=0; i<array2.length; i++) {
      key = (typeof array2[i]) + "~" + array2[i];
      if (temp[key]) {
         if (temp[key] == 0) { return false; } else { temp[key]--; }
      // Subtract to keep track of # of appearances in array2
      } else { // Key didn't appear in array1, arrays are not equal.
         return false;
      }
   }
   // If we get to this point, then every generated key in array1 showed up the exact same
   // number of times in array2, so the arrays are equal.
   return true;
}