// Wait until the DOM has been displayed
$(document).ready(function() {
 $("a").click(function(event) {
  event.preventDefault();
 });

 // On-click
 $("img").click(function() {
  alert("This image was clicked.");
 });

 // Read More
 $(".readmore").click(function() {
  $("p").slideDown();
  $(".readmore").hide();
  $(".readless hide").show();
 });

 // Read Less
 $(".readless").click(function() {
  $("#show-this-on-click").slideUp();
  $(".readless").hide();
  $(".readmore").show();
 });

 // Learn More
 $(".learnmore").click(function() {
  $("#learnmoretext").slideDown();
  $(".learnmore").hide();
 });

});
