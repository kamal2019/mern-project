import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import studentRoutes from "./routes/student.js";

const app = express();

app.use('/students',studentRoutes);

app.use(bodyParser.json({limit:"20mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}));

app.use(cors());
// const PORT  = process.env.PORT

const CONNECTION_URL = 'mongodb+srv://kamalaryal:<1b2c3d4f>@cluster0.sjnb9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;
 
// mongoose.connect(CONNECTION_URL, {
//     useNewUrlParser:true, useUnifiedTopology:true
// }).then(() => app.listen(PORT,() =>
// console.log(`connection is eslablished and running on port : ${PORT}`)
// )).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify',false);
mongoose.connect(CONNECTION_URL,()=>{
    console.log("connected"),
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  },
  e=>console.log(e)
)