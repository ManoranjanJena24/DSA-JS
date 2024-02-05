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


//  Create Product
app.post("/api/v1/product/new", async (req, res) => {
    const product = await Product.create(req.body)
    res.status(201).json({
        success: true,
        product

    })

})

//Read Product
app.get("/api/v1/products", async (req, res) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })

})

//Update Product
app.put("/api/v1/product/:id", async (req, res) => {
    let product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not Found"

        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        useFindAndModify: false,
        runValidators: true

    })

    res.status(200).json({
        success: true,
        product
    })

})


//Delete Product 
app.delete("/api/v1/product/:id", async (req, res) => {
    const product = await Product.findById(req.params.id)
    if (!product) {
        return res.status(500).json({
            success: false,
            message: "Product Not Found"

        })
    }

    await product.deleteOne();


    res.status(200).json({
        success: true,
        message: "Product is deleted successfully"
    })

})


app.listen(4500, () => {
    console.log("Server Is Working on http://localhost:4500")
})





