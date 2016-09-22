(function ($) {
    $(document).ready(function () {
        var prev_country = "";
        $('path').on('click', function () {
            if (prev_country !== "") {
                prev_country.css('fill', '#c0c0c0');
            }
            $(this).css('fill', "red");
            var code = $(this).attr('id');
            if (code == 'ru-main') {
                code = 'ru';
            }
            prev_country = $(this);
            displayCountryInfo(code);
        });

        function displayCountryInfo(country_code) {
            var url_country = 'https://restcountries.eu/rest/v1/alpha/';
            var borders = "";
            url_country += country_code;
            $.ajax({
                url: url_country,
                type: 'GET',
                dataType: 'json',
                success: function (res) {

                    $('#country-info').html(
                        "<div class='country-div'>" +
                        "<p class='country name'><span class='item-title'>Country:</span> " + res.name + "</p>" +
                        "<p class='country population'><span class='item-title'>Population:</span> " + res.population + "</p>" +
                        "<p class='country area'><span class='item-title'>Area:</span> " + res.area + "</p>" +
                        "<p class='country borders'><span class='item-title'>Borders:</span> " + res.borders.toString() + "</p>" +
                        "</div>"
                    );
                },
                error: function (res) {
                    alert('Error');
                }
            });
        }

    });
})(jQuery);