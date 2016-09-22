(function ($) {
    'use strict';

    $(document).ready(function () {

        $('#form').validate({
            rules: {
                'email': {
                    required: true,
                    email: true
                },
                'fname': {
                    required: true,
                    minlength: 2
                },
                'lname': {
                    required: true,
                    minlength: 2
                },
                'password': {
                    required: true,
                    minlength: 6
                },
                're-password': {
                    required: true,
                    equalTo: '#password'
                }
            },
            highlight: function (element) {
                $(element).closest('.form-group').addClass('has-error');
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-error');
            },
            errorElement: 'span',
            errorClass: 'help-block',
            submitHandler: function () {

                alert('form submitted');

            }
        })

    });

})(jQuery);