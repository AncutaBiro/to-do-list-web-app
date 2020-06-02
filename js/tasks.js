window.ToDoList = {

    API_URL: "http://localhost:8081/tasks",

    createTask: function () {
        let descriptionValue = $('#description-field').val();
        let deadlineValue = $('#deadline-field').val();

        var requestBody = {
            description: deadlineValue,
            deadline: deadlineValue
        };

        $.ajax({
            url: ToDoList.API_URL,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestBody)
        }).done(function (response) {
            console.log(response)
        });

    },

    binderEvents: function() {
        $('#create-task-form').submit(function () {
            ToDoList.createTask();
        });
    }

};
ToDoList.binderEvents();