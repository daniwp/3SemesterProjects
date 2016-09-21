(function ($) {
    $(document).ready(function () {

        $('#south').on('click', function () {
            $('#text-div').html("You clicked the South heart");
        });

        $('#east').on('click', function () {
            $('#text-div').html("You clicked the East heart");
        });

        $('#north').on('click', function () {
            $('#text-div').html("You clicked the North heart");
        });

        $('#west').on('click', function () {
            $('#text-div').html("You clicked the West heart");
        });

    });
})(jQuery);