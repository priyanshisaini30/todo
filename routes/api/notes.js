const Notes=require('../../db').Notes
const route =require('express').Router()

route.get('/todoList/:task_id/notes',(req,res)=>{
    //send array of todolist from our database

    Notes.findAll({
        attribut:['Text'],
        where:{task_id:req.params.task_id}
    }).then((Notes)=>{
                    res.status(200).send(Notes)
            })
            .catch((err)=>{
                res.status(500).send({
                    error:"could not retrive"
                    
                })
            })
})

route.post('/todoList/:task_id/notes',(req,res)=>{
    //we will create todolist 

    Notes.create({
       Text:req.body.Text,
       task_id:req.params.task_id

    }).then((Notes)=>{
        res.status(200).send(Notes)
    }).catch((err)=>{
        res.status(501).send(err)
    })

})

exports =module.exports=route
