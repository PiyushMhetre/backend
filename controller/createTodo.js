import { Todo } from "../models/Todo.js";

export async function createTodo (req,res) {
    try{
        //extract title and desc from req body
        const {title, description} = req.body;
        
        const response = await Todo.create({title,description});

        //send a json response with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry created successfully"
            }
        );
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:error.message
        })
    }
}
