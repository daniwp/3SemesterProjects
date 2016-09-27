$(document).ready(function () {

    getPersons();

    $('#btn-update').on('click', function () {
        getPersons();
    });

    $('#btn-add').on('click', function () {
        var fname = $('#new-fname').val();
        var lname = $('#new-lname').val();
        var phone = $('#new-phone').val();
        $.ajax({
            url: 'http://localhost:8084/RESTExerciseDay1Del2/api/person/',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify({
                fname: fname,
                lname: lname,
                phone: phone
            }),
            success: function (res) {
                getPersons();
            },
            error: function (res) {
                alert(res);
            }
        });
    })

    $('#btn-edit').on('click', function () {
        editPerson($('#btn-edit').data("edit-id"));
    });

});

function setEditId(id) {
    $('#btn-edit').data("edit-id", id);

    $.ajax({
        url: 'http://localhost:8084/RESTExerciseDay1Del2/api/person/' + id,
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            $('#edit-fname').val(res.fname);
            $('#edit-lname').val(res.lname);
            $('#edit-phone').val(res.phone);
        },
        error: function (res) {
            alert('Error');
        }
    });
}

function editPerson(id) {
    var fname = $('#edit-fname').val();
    var lname = $('#edit-lname').val();
    var phone = $('#edit-phone').val();
    $.ajax({
        url: 'http://localhost:8084/RESTExerciseDay1Del2/api/person/',
        type: 'PUT',
        contentType: "application/json",
        data: JSON.stringify({
            id: id,
            fname: fname,
            lname: lname,
            phone: phone
        }),
        success: function (res) {
            getPersons();
        },
        error: function (res) {
            alert(res);
        }
    });
}

function deletePerson(id) {

    $.ajax({
        url: 'http://localhost:8084/RESTExerciseDay1Del2/api/person/' + id,
        type: 'DELETE',
        dataType: 'json',
        success: function (res) {
            getPersons();
        },
        error: function (res) {
            alert('Error');
        }
    });
}

function getPersons() {
    $.ajax({
        url: 'http://localhost:8084/RESTExerciseDay1Del2/api/person',
        type: 'GET',
        dataType: 'json',
        success: function (res) {
            $('#persons').html("");
            res.forEach(function (person) {
                $('#persons').append(
                    '<tr>' +
                    '<th>' + person.id + '</th>' +
                    '<td>' + person.fname + '</td>' +
                    '<td>' + person.lname + '</td>' +
                    '<td>' + person.phone + '</td>' +
                    '<td>' +
                    '<a onclick="setEditId(' + person.id + ')" data-toggle="modal" data-target="#editModal"">edit</a>' + " / " +
                    '<a onclick="deletePerson(' + person.id + ')">delete</a>' +
                    '</td>' +
                    '</tr>'
                );
            });
        },
        error: function (res) {
            alert('Error');
        }
    });
}