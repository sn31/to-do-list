function Task(taskDescription,status) {
    this.taskDescription = taskDescription;
} 

Task.prototype.removeTask = function() {
    this.taskDescription ="TESTING";
}
$(document).ready(function() {
    $("form#input").submit(function(event) {
        event.preventDefault();
        var taskDescriptionInput = $("#taskInput").val();
        var taskStatus = $("input[type=checkbox]:checked").val();
        var newTask = new Task(taskDescriptionInput);
        $("#taskInput").val("");
        $("#taskList").show();
        $("#taskList").append("<li><input type='checkbox' value='"+newTask.taskDescription+"'/> &nbsp;&nbsp;" + newTask.taskDescription + "<br></li>")
        
        $("#taskList li").click(function () {
            $(this).remove();
            console.log(this.val());
            $("#completedList").append(this)
        })
        
    })
})
