$(document).ready(function() {
// assign cities as values
var cities = ["NYC", "SF", "LA", "ATX", "SYD"];
// set for loop (so long as this is argument is true, this will run)
  for(i=0;i<cities.length;i++) {
    // identify element we want to append the city name to appear
    $('#city-type').append('<option value="' + cities[i] + '">' + cities[i] + '</option>');
  }
  // add event listener to dropdown
  $('form').on('change', '#city-type',function(){
    var city = $('#city-type').val();
    // if user selects new york city, show background image of new york city
    if(city == 'NYC') {
      $('body').attr('class','nyc');
    }
    // if user selects san francisco, show background image of san francisco
    else if (city == 'SF') {
      $('body').attr('class','sf');
    }
    // if user selects los angeles, show background image of los angeles
    else if (city == 'LA') {
      $('body').attr('class','la');
    }
    // if user selects austin, show background image of austin
    else if (city == 'ATX') {
      $('body').attr('class','austin');
    }
    // if user selects sydney, show background image of sydney
    else if (city == 'SYD') {
      $('body').attr('class','sydney');
    }
  });
});
