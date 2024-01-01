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

app.post("/signin", async (req,res)=>{
    const usernameRecieved = req.body.username
    const passwordRecieved = req.body.password

    const data = mockData.find((element)=> element.username == usernameRecieved)
    if(!data){
        res.json({"message": "user not found"})
    }
    else{
       const token = await jwt.sign( data.username, secString)
       res.json( {
        userName: data.username,
        token
       })
    }
    
    
})


app.get("/data", (req, res) => {
    const tokenWithBearer = req.headers.authorization;

    if (tokenWithBearer && tokenWithBearer.startsWith('Bearer ')) {      
        const token = tokenWithBearer.slice(7); // "Bearer ".length === 7
        const decode = jwt.verify(token, secString)
        
        const userData = mockData.find((element)=> element.username == decode)
        if(userData){
            res.status(200).json(userData)
        }
    } else {
        
        res.status(401).json({ message: 'Invalid or missing Authorization header' });
    }
});
app.listen(3000, ()=>{
    console.log("running on port 3000 ff")
})