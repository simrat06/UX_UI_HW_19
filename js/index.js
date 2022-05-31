console.log("your index.js file is loaded correctly!!")

$(document).ready(function(){
    $("h2").hover(function(){
      $(this).css("text-decoration", "underline");
      }, function(){
      $(this).css("text-decoration", "none");
    });
  });


 