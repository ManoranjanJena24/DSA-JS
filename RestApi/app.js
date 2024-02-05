const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/Sample", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected With MongoDB")
}).catch((err) => {
    console.log(err)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())


const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number
})

const Product = new mongoose.model("Product", productSchema)

app.post("/api/v1/product/new", async (req, res) => {
    await Product.create(req.body)
})


app.listen(4500, () => {
    console.log("Server Is Working on http://localhost:4500")
})





