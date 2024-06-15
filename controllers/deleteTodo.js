import Todo from "../models/model.todo.js";

const deleteTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodo = await Todo.findByIdAndDelete(id);
    res.status(200).json({
        success:true,
        message:"todo deleted successfully",
        data:deleteTodo,
    
    });

    
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "could not delete the todo",
      error: error.message,
    });
  }
};

export default deleteTodo;
