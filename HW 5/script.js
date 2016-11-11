$(document).ready(function() {
    $('form').submit(addCity);

    function addCity(event) {
        event.preventDefault();

        var city = $('#city-type').val();

        if (city === 'New York' || city === 'NYC' || city === 'New York City') {
            $('body').removeClass('starter-image').addClass('nyc');
        } else if (city === 'San Francisco' || city === 'SF' || city === 'Bay Area') {
            $('body').removeClass('starter-image').addClass('sf');
        } else if (city === 'Los Angeles' || city === 'LA' || city === 'LAX') {
            $('body').removeClass('starter-image').addClass('la');
        } else if (city === 'Austin' || city === 'ATX') {
            $('body').removeClass('starter-image').addClass('austin');
        } else if (city === 'Sydney' || city === 'SYD') {
            $('body').removeClass('starter-image').addClass('sydney');
        } else {
            $('body').addClass('starter-image');
            alert('We are sorry, no images of this city were found.');
        }

    }

});
