$(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a heading.");
    alert("I told you, THIS IS A HEADING!");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $("p").click(function() {
    $(".walrus-showing").show();
    $(".walrus-hidden").hide();
  });
});