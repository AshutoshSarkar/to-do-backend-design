import Todo from "../models/model.todo.js";

const getTodo = async (req, res) => {
  try {
    //fetch all todos from the database

    const todos = await Todo.find({});

    //update the response to include the data from the database
    res.status(200).json({
      success: true,
      data: todos,
      message: "Todos fetched successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Todos not found",
    });
  }
};

export default getTodo ;

