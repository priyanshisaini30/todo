function fetchtodos(done){
    $.get('/api/todoList',function(data){
            done(data)
    })
}

function addNoteforTask(id,text,done){
    console.log("here")
    console.log(id);
    console.log(text);
    
    $.ajax({
        url: '/api/todoList/'+id+'/notes',
        type: 'POST',
        data: {
            task_id:id,
            Text:text,
        },
        success:   
                function (data) {
                console.log(data)
                done(data)
        }
     })
}

function addtodo(Title,Description,DueDate,Priority,Status,done){
    $.ajax({
        url: '/api/todoList',
        type: 'POST',
        data: {
            Title: Title,
            Description : Description,
            DueDate : DueDate,
            Status : Status,
            Priority : Priority
        },
        success:   function (data) {
                done(data)
        }
     })
}

function getNotesByTaskId(id,done) {
    
    $.get('/api/todoList/'+id+'/notes', function (data) {
        done(data)
    })
}


function fetchtodoByID(id,done){
    $.get('/api/todoList/'+id,function(data){
            done(data)
    })
}

function Edittodo(id,Title,Description,DueDate,Priority,Status,done){
    $.ajax({
        url: '/api/todoList/'+id,
        type: 'PATCH',
        data: {
            Title: Title,
            Description : Description,
            DueDate : DueDate,
            Status : Status,
            Priority : Priority
        },
        success: function (data) {
                done(data)
        }
     })
}


function createtodo(todoList){
return $(`<tr class="addnote" onclick="$(this).nextUntil('tr.addnote').toggle();getNotes(${todoList.id})">
             <td style="display:none" class="TD">${todoList.id}</td>
            <td name="TD">${todoList.Title}</td>
            <td name="TD">${todoList.Description}</td>
            <td name="TD">${todoList.DueDate}</td>
            <td name="TD">${todoList.Status}</td>
            <td name="TD">${todoList.Priority}</td>
            <td><button data-toggle="modal" data-target="#myModal" onclick="updateform(${todoList.id})" id="edit"> edit</button></td>
        </tr>
        <tr name="notes" style="display:none">
              <td>
                   <form>
                   <input type="text" placeholder="add notes" id="notetask"></input>
                   <input type="hidden" id="taskId" readonly>
                   <button onclick="addNoteTask(${todoList.id})">Add Note</button>
                   </form>
                   <br>
                   <ul class="note_list">
                    
                   </ul>
              <td>
        </tr>
    `)
}

function updateform(id){
    console.log(id)
    fetchtodoByID(id,function (todo){
        console.log(todo.Status)
            document.getElementById("updateId").value=todo.id
            document.getElementById("updateTitle").value=todo.Title
            document.getElementById("updateDescription").value=todo.Description
            document.getElementById("updateDueDate").value=todo.DueDate
            document.getElementById("updateStatus").value=todo.Status
            document.getElementById("updatePriority").value=todo.Priority
        })
}



$(function(){
    let todos=$('#todolist_item')
    fetchtodos(function (todoList){
       todos.empty()
       for(todo of todoList){
           todos.append(createtodo(todo))
       }
    })
})

$(function(){
    let todos=$('.note_list')
    let id=$('#taskId').val()
    console.log(id)
    getNotes(id,function (todoList){
       todos.empty()
       for(todo of todoList){
           todos.append(createtodo(todo))
       }
    })
})


 
function getNotes(id) {
    let taskCard = $('.note_list')
    fetchtodoByID(id,function (task) {
        taskCard.empty()
        getNotesByTaskId(id,function(notes){
            taskCard.append(createList(createNoteList(notes)))
        })
    })
}
function createList(notes){
    return $(`
        
            <li class="row">   
                ${notes}
            </li>
           
    `)
}
 
function createNoteList(notes) {
    let list = []
    for (note of notes) {
        list.push(note.Text)
    }
    console.log(list)
    return list
}
 
function addNoteTask(id){
    
    let noteText = $('#notetask')
    addNoteforTask(
    id,
    noteText.val(),
    function (note) {
        window.alert("Note Added ")
    })
}