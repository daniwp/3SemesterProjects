(function ($) {
    $(document).ready(function () {

        var Person = function (firstname, lastname, phone, email) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.phone = phone;
            this.email = email;
        };

        var persons = [new Person("Daniel", "Winkel", 26125228, "danielwinkel@gmail.com"), new Person("Johan", "Nærby", 73841927, "johan@wow.dk"), new Person("Issean", "White", 73523927, "johsadaow@taber.dk")];

        for (var i in persons) {
            $('#data').append(
                "<tr>" +
                "<td>" + persons[i].firstname + "</td>" +
                "<td>" + persons[i].lastname + "</td>" +
                "<td>" + persons[i].phone + "</td>" +
                "<td>" + persons[i].email + "</td>" +
                "</tr>"
            )
            ;
        }

        $('.hoverRed').on('mouseenter', function () {
            $(this).html("<p>This is the Red border box!!</p>");
        }).on('mouseleave', function () {
            $(this).html("");
        });

        $('.hoverBlue').on('mouseenter', function () {
            $(this).html("<p>This is the Blue border box!!</p>");
        }).on('mouseleave', function () {
            $(this).html("");
        });

        $('.hoverGreen').on('mouseenter', function () {
            $(this).html("<p>This is the Green border box!!</p>");
        }).on('mouseleave', function () {
            $(this).html("");
        });

        $('.redClick').on('click', function () {
            console.log("Red Box Clicked!");
        });

        $('.blueClick').on('click', function () {
            console.log("Blue Box Clicked!");
        });

        $('.greenClick').on('click', function () {
            console.log("Green Box Clicked!");
        });

        //$('div').css('background-color', "red");

        $('#submit').on("click", function () {
            e.preventDefault();
            var data = $('#formTest').serializeArray();
            var name = data[0].value;
            var age = data[1].value;
            var gender = data[2].value;
            var vehicle = data[3].value;

            console.log("Name: " + name + "\nAge: " + age + "\nGender: " + gender + "\nVehicle: " + vehicle);

            $('#form-data').append(
                "<tr>" +
                "<td>" + name + "</td>" +
                "<td>" + age + "</td>" +
                "<td>" + gender + "</td>" +
                "<td>" + vehicle + "</td>" +
                "</tr>"
            );
        });
        
        $('li').on('click', function() {
            console.log("Welcome " + $(this).html());
        });

        $("li").mouseover(function() {

            $(this).css('line-height', '200%');

        }).mouseout(function() {

            $(this).css('line-height', '100%');

        })
        
        $


    });
})(jQuery);

