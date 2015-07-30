// add scripts

$(document).on('ready', function() {

  var header1 = $('#first-heading');

  header1.append(" Sup, I'm a header").css("color", "green");

  $('.container p').first().append("s are the worst.");

  $('p:eq(1)').append(" is the loneliest number");

  $('p:eq(2)').append("&nbsp;&nbsp;<span>I'm a span!</span>");

  $('h1:eq(1)').css("color", "blue");

  $('h1:eq(2)').css( "color", "orange");

  $('#main-btn').on('click', function(){
    $('.container p').first().append("<li>Hi!</li>");});

  $('#add-btn').on('click', function(){
    $('p:eq(6)').append("<p>I'm a paragraph!</p>");});

  $('#delegate').on("click", '#minor-btn', function(){
    $('#delegate').append('<p>delegate this.</p>');
  });

//doesnt' remove added p tags
$().on('click', 'p', function(){
  $(this).remove();
});

//removes even added p tags
$(document).on('click', 'p', function(){
  $(this).remove();
});

});


