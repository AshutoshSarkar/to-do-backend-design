import Todo from "../models/model.todo.js";
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Please enter all fields" });
    }
    const newTodo = new Todo({
      title,
      description,
    });
    await newTodo.save();
    res.status(201).json({
      success: true,
      data: newTodo,
      Message: "Todo created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Todo not created",
    });
  }
};

export default createTodo;
