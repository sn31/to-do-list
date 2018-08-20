function Task(taskDescription, status) {
    this.taskDescription = taskDescription;
}

Task.prototype.removeTask = function () {
    $("#taskList li").unbind('click').click(function () {
        $(this).remove();
        $(".completed").show();
        $("#completedList").append("<li>"+$(this).text()+"<li>");
        
    })
}
$(document).ready(function () {
    $("form#input").submit(function (event) {
        event.preventDefault();
        var taskDescriptionInput = $("#taskInput").val();
        var taskStatus = $("input[type=checkbox]:checked").val();
        var newTask = new Task(taskDescriptionInput);
        $("#taskInput").val("");
        $(".taskList").show();
        $("#taskList").append("<li><input type='checkbox'/> &nbsp;&nbsp;" + newTask.taskDescription + "<br></li>")
        newTask.removeTask();
    })
})

































// function Task(taskDescription, status) {
//     this.taskDescription = taskDescription;
// }

// Task.prototype.removeTask = function () {
//     this.taskDescription = "TESTING";
// }
// $(document).ready(function () {
//     $("form#input").submit(function (event) {
//         event.preventDefault();
//         var taskDescriptionInput = $("#taskInput").val();
//         var taskStatus = $("input[type=checkbox]:checked").val();
//         var newTask = new Task(taskDescriptionInput);
//         $("#taskInput").val("");
//         $("#taskList").show();
//         $("#taskList").append("<li><input type='checkbox'/> &nbsp;&nbsp;" + newTask.taskDescription + "<br></li>")
//         $("#taskList li").unbind('click').click(function () {
//             $(this).remove();
//             console.log($(this).text());
//             $("#completedList").append("<li>"+$(this).text()+"<li>");
//         })

//     })
// })
