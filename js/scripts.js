$(document).click(function() {
  $("h1").click(function() {
    alert("This is a heading.");
    alert("I told you, THIS IS A HEADING!");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});