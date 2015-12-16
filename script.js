$(document).ready(function() {
  console.log("Script included!");
  $("button").click(function() {
    $('img').slideToggle();
  });
    $(this).toggleClass("check");
  $("ul.crossoff > li").click(function() {
    $(this).toggleClass("strike");

  });
  $(this).toggleClass("check");
  $("ol.highlight > li").click(function(){
    $(this).toggleClass("yellow");

  });
});

