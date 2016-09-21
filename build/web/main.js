(function ($) {
    $(document).ready(function () {

        (function updateTime() {
            $.ajax({
                url: 'http://localhost:8084/JavascriptExercise4Del3/time',
                type: 'GET',
                dataType: 'json',
                success: function (res) {
                    $('#time').html(res.hour + ":" + res.minute + ":" + res.second);
                },
                error: function (res) {
                    alert('Error');
                },
                complete: function () {
                    setTimeout(updateTime, 1000);
                }
            })
            ;
        })();

    });
})(jQuery);