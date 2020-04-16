
$(function () {
    $('#updatetodo').click(function () {
        let taskId = $('#updateId')
        let taskTitle = $('#updateTitle')
        let taskDescription = $('#updateDescription')
        let taskDue = $('#updateDueDate')
        let taskStatus = $("input[name='updateStatus']:checked")
        let taskPriority = $('#updatePriority')
      
        console.log(taskTitle.val())
        console.log(taskDescription.val())
        console.log(taskDue.val());
        console.log(taskStatus.val());
        console.log(taskPriority.val());
        console.log(taskId.val());

        Edittodo(
            taskId.val(),
            taskTitle.val(),
            taskDescription.val(),
            taskDue.val(),
            taskPriority.val(),
            taskStatus.val(),
            function (Edittodo) {
                window.alert("Updated")
            })
    })
})