(function ($) {
    $(document).ready(function () {

        $('#get-person').on('click', function () {

            $.ajax({
                url: 'http://localhost:8084/JavaScript4ExerciseDel2/person',
                type: 'GET',
                dataType: 'json',
                success: function (res) {
                    $('#person-tbody').append(
                        "<tr>" +
                        "<td>" + res.firstname + "</td>" +
                        "<td>" + res.lastname + "</td>" +
                        "<td>" + res.age + "</td>" +
                        "</tr>"
                    );
                },
                error: function (res) {
                    alert('Error');
                }
            });

        });

        $('#add-person').on('click', function () {

            var person = {
                firstname: $('#firstname').val(),
                lastname: $('#lastname').val(),
                age: $('#age').val()
            };

            $.ajax({
                url: 'http://localhost:8084/JavaScript4ExerciseDel2/add-person',
                type: 'POST',
                dataType: 'json',
                data: JSON.stringify(person),
                success: function (res) {
                    console.log(res);
                },
                error: function (res) {
                    console.log(res);
                }
            });

        });

    });
})(jQuery);