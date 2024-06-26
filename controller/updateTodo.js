import { Todo } from "../models/Todo.js";

export async function updateTodo(req,res){
    try{
        const {id} = req.params;
        const {title,description} = req.body;

        const response = await Todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        )

        res.status(200).json({
            success:true,
            data:response,
            message:"updation done successfully"
        })
    }
    catch(err){
        console.log(err),
        res.status(500).json({
            success:false,
            error:err.message,
            message:"updation failed"
        })

    }
}