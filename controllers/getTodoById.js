import Todo from "../models/model.todo.js";
 const getTodoById = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findById(id);
  
      if (!todo) {
        return res.status(404).json({
          success: false,
          message: "Todo not found",
        });
      }
  
      res.status(200).json({
        success: true,
        data: todo,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Could not retrieve todo",
        error: error.message,
      });
    }
  };

export default getTodoById;
  