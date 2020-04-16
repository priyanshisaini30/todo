const Sequelize=require('sequelize')

const db = new Sequelize({
    dialect: 'sqlite',
    storage: __dirname + '/tasks.db'
})

const TodoTasks=db.define('ToDoTasks',{
    id:{
       type: Sequelize.INTEGER,
       primaryKey:true,
       autoIncrement:true
    },
    Title:{
       type: Sequelize.STRING(40),
       allowNull:false
    },
    Description:{
        type: Sequelize.STRING(60),
        allowNull:true
    },
    DueDate:{
        type: Sequelize.DATEONLY,
        allowNull:false
    },
    Priority:{
        type: Sequelize.STRING(60),
        allowNull:true
    },
    Status:{
        type: Sequelize.STRING(60),
        allowNull:false
    }
});

const Notes=db.define('Notes',{
    id:{
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
     },
    Text:{
        type: Sequelize.STRING(60),
        allowNull:false
    }
});

Notes.belongsTo(TodoTasks,{foreignKey: 'task_id'});
TodoTasks.hasMany(Notes,{foreignKey : 'task_id'});

db.sync()
    .then(()=>{
        console.log("db.work")
    })
    .catch((err)=>{
    console.error(err)
    })


module.exports={
    db,TodoTasks,Notes
};