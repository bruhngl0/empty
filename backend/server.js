const express = require("express")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const secString = "3333"


const app = express()

app.use(express.json())
app.use(cors())

const mockData = [
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
    
];

app.post("/", async(req,res)=>{
    const usernameRecieved = req.body.username
    const passwordRecieved = req.body.password

    const data = mockData.find((element)=> element.username == usernameRecieved)
    if(!data){
        res.json({"message": "user not found"})
    }
    else{
       const token = await jwt.sign(data.password, secString)
       res.json(token)
    }
    
    
})
app.listen(3000, ()=>{
    console.log("running on port 3000")
})