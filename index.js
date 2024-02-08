const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config({ path: "./.env" })

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/admin", require("./routes/todoRoutes"))

mongoose.connection.once("open", () => {
    console.log("MOMGo conncect");
    app.listen(5000, console.log("server Running"))
})