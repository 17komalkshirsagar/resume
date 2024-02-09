const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config({ path: "./.env" })
const path = require("path") //dist folder move mzal me lagte add kryache 10 line also

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "dist"))) //nanter hi line add
app.use("/api/admin", require("./routes/todoRoutes"))

//last ha path 404
app.use("*", (req, res) => {
    req.sednFile(paht.join(__dirname, "dist", "index.html"))
})

mongoose.connection.once("open", () => {
    console.log("MOMGo conncect");
    app.listen(5000, console.log("server Running"))
})