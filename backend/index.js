const { request } = require("express");
const  express= require("express")
const cors = require("cors");
require('./db/config');
const User = require("./db/user");
const app = express();
app.use(express.json());
app.use(cors());
app.post("/register",async (req,resp)=>{
    let user= new User(req.body);
    let result = user.save();
    resp.send("api in progress...")
})


app.listen(5500);
