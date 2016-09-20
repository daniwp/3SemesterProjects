(function ($) {
    $(document).ready(function () {

        $('#quote-btn').on('click', function () {

            $.ajax({
                url: 'http://localhost:8084/JavaScript4ExerciseDel1/quote',
                type: 'GET',
                dataType: 'json',
                success: function (res) {
                    $('#quote-div').html(res.text);
                },
                error: function (res) {
                    alert('Error');
                }
            });

        });

    });
})(jQuery);