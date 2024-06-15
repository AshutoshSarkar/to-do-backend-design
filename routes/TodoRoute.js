// routes/route.createtodo.js
import express from "express";
import createTodo from "../controllers/createtodo.controller.js";
import getTodoById from "../controllers/getTodoById.js";
import getTodo from "../controllers/getTodo.controller.js";
import updateTodo from "../controllers/updateTodo.js";
import deleteTodo from "../controllers/deleteTodo.js";

const router = express.Router();

router.post("/createTodo", createTodo);
router.get("/getTodos", getTodo);
router.get("/getTodosbyid/:id", getTodoById);
router.put("/updateTodo/:id",updateTodo );
router.delete("/deleteTodo/:id",deleteTodo);
export default router;
