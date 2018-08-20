function Task(taskDesceiption,status) {
    this.taskDescription = taskDesceiption;
    this.status = status;
} 

$(document).ready(function() {
    $("form#input").submit(function(event) {
        event.preventDefault();
        var taskDescriptionInput = $("#taskInput").val();
        var newTask = new Task(taskDescriptionInput,false);
        $("#taskInput").val("");
        $("#result").show();
        $("#result").append("<input name='statusBox' type='checkbox'/> &nbsp;&nbsp;" + newTask.taskDescription + "<br>")
        var taskStatus = $("input:checkbox[name=statusBox]").val();
        console.log(taskStatus);
    })
})
