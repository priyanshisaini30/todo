$(function(){

    $('#addtodo').click(function(){
        let Title=$('#Title')
        let Description=$('#Description')
        let DueDate=$('#DueDate')
        let Priority=$('#Priority')
        let Status=$("input[name='Status']:checked")
         
        console.log(Title.val())
        console.log(Description.val())
        console.log(DueDate.val())
        console.log(Priority.val())
        console.log(Status.val())
        addtodo(
           Title.val(),
           Description.val(),
           DueDate.val(),
           Priority.val(),
           Status.val(),
           function(addtodo){
               window.alert( "Added ")
           })
          
    })
})