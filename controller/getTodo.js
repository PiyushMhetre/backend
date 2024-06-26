import { Todo } from "../models/Todo.js";

export async function getTodo(req,res){
    try{
        const response = await Todo.find({});
        console.log(response);
        res.status(200).json(
            {
                success:true,
                data:response,
                message:" Data is fetched successfully"
            }
        )
    }
    catch(err){
        console.error(err);
        console.log("error occured in fetching data")
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message:"fetching failed"
            }
        )

    }
}

export async function getTodoById(req,res){
    try{
        const id = req.params.id;   
        const response = await Todo.findById({_id : id})

        //if data not found
        if(!response){
        res.status(404).json({
            success:true,
            message:" data with given id not found"
        })
        }

        //data founcd
        res.status(200).json({
            success:true,
            data:response,
            message: `data found with ${id}`
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            data:err.message,
            message:"error occured"
        })
    }
}