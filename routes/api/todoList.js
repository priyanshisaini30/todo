const todolist=require('../../db').TodoTasks
const route =require('express').Router()


route.get('/',(req,res)=>{
    //send array of todolist from our database

    todolist.findAll()
            .then((todolist)=>{
                    res.status(200).send(todolist)
            })
            .catch((err)=>{
                res.status(500).send({
                    error:"could not retrive"
                    
                })
            })
})

route.get('/:id', async (req, res) => {
    if (isNaN(Number(req.params.id))) {
      return res.status(400).send({
        error: 'todo id must be an integer',
      })
    }
    
    const task = await todolist.findByPk(req.params.id)
   
    if (!task) {
      return res.status(404).send({
        error: 'No task found with id = ' + req.params.id,
      })
    }
    res.send(task)
  })
  


  route.patch('/:id',(req,res)=>{
    if (isNaN(Number(req.params.id))) {
      return res.status(400).send({
        error: 'todo id must be an integer',
      })
    }

     todolist.update({
      Title: req.body.Title,
      Description : req.body.Description,
      DueDate: req.body.DueDate, //not getting updated
      Status: req.body.Status,
      Priority: req.body.Priority},
      {
        where : {id : req.params.id}
    }).catch(err =>
      console.error(err)
    )
   
    res.status(201).send({ success: 'task updated'})
  })


route.post('/',(req,res)=>{
    //we will create todolist 

    todolist.create({
        Title:req.body.Title,
        Description:req.body.Description,
        DueDate:req.body.DueDate,
        Status:req.body.Status,
        Priority:req.body.Priority

    }).then((todolist)=>{
        res.status(200).send(todolist)
    }).catch((err)=>{
        res.status(501).send("Could not add")
    })

})

exports =module.exports=route
