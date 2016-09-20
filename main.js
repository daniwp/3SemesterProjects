(function ($) {
    $(document).ready(function () {

        $('.div1').on('click', function () {
            $(this).css('display', 'none');
        });

        $('.div2').on('click', function () {
            $('.div3').css('font-size', '50px');
        });

        $('.del2').on('click', function () {
            var number = $(this).find('span').html()
            $(this).find('span').html(number * number);
        });

        var fontsize = 20;
        $('.del3').each(function (index) {
            $(this).css('font-size', fontsize + 'px');
            fontsize++;
        });

        $('.del3').filter(":even").css("background-color", "lightgrey");
        $('.del3').filter(":odd").css("background-color", "darkgrey");


        $('#del4').on('click', function () {
            scrambleLi();
        });

        function scrambleLi() {
            var listItems = [];

            $('#del4 li').each(function (e) {
                listItems.push($(this));
            });
            $('#del4').html(shuffleAds(listItems));
        }

        function shuffleAds(arr) {
            for (var j, x, i = arr.length; i; j = parseInt(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
            return arr;
        }

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
            );
        }

        $('#data tr').on('mouseover', function () {
            $(this).css('font-style', 'italic').css('font-weight', 'bold');
        }).on('mouseleave', function() {
            $(this).css('font-style', 'normal').css('font-weight', 'normal');
        });

    });
})(jQuery);