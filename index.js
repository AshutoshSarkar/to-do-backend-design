import express from "express";
import connect from "./config/config.mongoDB.js";
import todoRoutes from "./routes/TodoRoute.js";
import { config } from "dotenv";


k
config();

const app = express();
app.use(express.json());  // This is important for parsing JSON bodies

app.use("/api/v1", todoRoutes);


const PORT = process.env.PORT || 3000;

 app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });

    app.get('/',(req,res)=>{
      res.send('hello this is my todo applications home page' )
    })

    connect();