
import { Router } from "express";
import { createTodo } from "../controller/createTodo.js";
import { getTodo, getTodoById } from "../controller/getTodo.js";
import { updateTodo } from "../controller/updateTodo.js";
import { deletTodo } from "../controller/deleteTodo.js";
const todoRouter = Router();

//importing controller function to run when we hit the specific routes
todoRouter.post("/createTodo", createTodo)
todoRouter.get("/getTodo",getTodo)
todoRouter.get("/getTodo/:id", getTodoById)
todoRouter.put("/updateTodo/:id",updateTodo)
todoRouter.delete("/deleteTodo/:id",deletTodo)



export default todoRouter;