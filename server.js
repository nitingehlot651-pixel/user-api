const express = require("express")
const dbConnect = require("./config/userConfig")
require("dotenv").config()

const app = express()
dbConnect()

app.use(express.json())
app.use(express.urlencoded())

const PORT = process.env.PORT

app.get("/", (req, res)=>{
    res.json("hello")
})

app.use("/api/users", require("./routes/userRouter"))

app.listen(PORT,()=>{
    console.log(PORT)
})