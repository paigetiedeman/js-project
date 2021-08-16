$(document).click(function() {
  $("h1").click(function() {
    const messages = ['This is a heading', "I told you, THIS IS A HEADING!"]
    messages.forEach(function(message) {
      alert(message); 
    });
    
  });

  $("img").click(function() {
    alert("This is an image.");
  });

  $(".clickable").click(function() {
    $("#walrus-showing").Toggle();
    $("#walrus-hidden").Toggle();
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