const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');


const app = express();

const port = "4000";
app.use(cors());
app.use(bodyParser.json());

app.get("/name", (req,res) => {
    res.json({message: "Sending response with all user names"});
})
app.listen(port, ()=>{
    console.log("Node server started on port 4000");
})