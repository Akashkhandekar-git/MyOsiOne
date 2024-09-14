const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");

const port = 4000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/login/data", (req, res)=>{
     const {email , password} = req.body;
     console.log("Data is:", {email, password});
     res.status(200).json({message:`Data recieved from the frontend` , data: {email, password}})
})

app.listen(port, ()=>{
    console.log(`App is running at port: ${port}`);
})
