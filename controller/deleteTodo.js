import { Todo } from "../models/Todo.js";

export async function deletTodo(req,res){
    try{
        const {id} = req.params;
        const response = await Todo.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message:"deletion done successfully"
        })
    }
    catch(err){
        console.error(err)
    }
}