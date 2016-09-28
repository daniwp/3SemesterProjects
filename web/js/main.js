(function ($) {
    $(document).ready(function () {

        function randomQuote() {
            $('#get-response')
                    .css('display', 'none')
                    .removeClass('alert-danger')
                    .removeClass('alert-success');

            $.ajax({
                url: 'http://localhost:8084/RESTExerciseDay1/api/quote/random',
                type: 'GET',
                dataType: 'json',
                success: function (res) {
                    $('#quote').html(res.quote);
                },
                error: function (res) {
                    var json = $.parseJSON(res.responseText);
                    $('#add-response')
                            .html('Error code: ' + json.code + '<br>' + 'Message: "' + json.message + '"')
                            .toggleClass('alert-danger')
                            .fadeIn(400);
                }
            });
        }

        randomQuote();

        $('#quote-get').on('click', function () {
            randomQuote();
        });

        $('#quote-update').on('click', function () {
            var id = $('#quote-id').val();
            var q = $('#quote-newq').val();

            $('#update-response')
                    .css('display', 'none')
                    .removeClass('alert-danger')
                    .removeClass('alert-success');

            $.ajax({
                url: 'http://localhost:8084/RESTExerciseDay1/api/quote/' + id,
                type: 'PUT',
                contentType: "application/json",
                data: JSON.stringify({quote: q}),
                success: function (res) {
                    $('#update-response')
                            .html("Quote successfully updated")
                            .toggleClass("alert-success")
                            .fadeIn(400);
                },
                error: function (res) {
                    var json = $.parseJSON(res.responseText);
                    $('#update-response')
                            .html('Error code: ' + json.code + '<br>' + 'Message: "' + json.message + '"')
                            .toggleClass('alert-danger')
                            .fadeIn(400);
                }
            });
        });

        $('#quote-delete').on('click', function () {
            var id = $('#quote-id-delete').val();

            $('#delete-response')
                    .css('display', 'none')
                    .removeClass('alert-danger')
                    .removeClass('alert-success');

            $.ajax({
                url: 'http://localhost:8084/RESTExerciseDay1/api/quote/' + id,
                type: 'DELETE',
                success: function (res) {
                    $('#delete-response')
                            .html("Quote successfully deleted")
                            .toggleClass("alert-success")
                            .fadeIn(400);
                },
                error: function (res) {
                    var json = $.parseJSON(res.responseText);
                    $('#delete-response')
                            .html('Error code: ' + json.code + '<br>' + 'Message: "' + json.message + '"')
                            .toggleClass('alert-danger')
                            .fadeIn(400);
                }
            });
        });

    });
})(jQuery);