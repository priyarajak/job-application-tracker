require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose= require("mongoose");

const app = express();

//middlesware
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/jobs", require("./routes/jobRoutes"))

app.get("/",(req,res)=> {
    res.send("Job Tracker App running");
});

app.listen(process.env.PORT || 5001, () => {
    console.log("Server Running on Port " + process.env.PORT);
  });