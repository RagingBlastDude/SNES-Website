/* The functions below load a global header and footer*/
$(function(){
  $("#header").load("header.html");
});
$(function(){
  $("#footer").load("footer.html");
});

/* The script below will change the colour of the submit button in the contact form when the mouse is hovered over it*/
$(document).ready(function(){
  $(".submit-btn").hover(function(){
    $(this).css("background-color", "#fff");
    $(this).css("color", "#000");
    }, function(){
    $(this).css("background-color", "#514689");
    $(this).css("color", "#fff");
  });
});
