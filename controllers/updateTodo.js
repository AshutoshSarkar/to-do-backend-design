import Todo from "../models/model.todo.js";

const updateTodo = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(
      { _id: id },
      {
        title,
        description,
        updatedAt: Date.now(),
      }
    );
    res.status(200).json({
      success: true,
      message: "todo updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "could not update the todo",
      error: error.message,
    });
  }
};

export default updateTodo;
