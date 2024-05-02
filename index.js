const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const Tr_logisticRoute = require("./routes/Tr_logistic.route.js");
const Master_itemRoute = require("./routes/Master_item.route.js");
const Master_supplier = require("./routes/Master_supplier.route.js");
const Tr_qc = require("./routes/Tr_qc.route.js");



const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// routes
app.use("/api/products", productRoute);
app.use("/api/Tr_logistic",Tr_logisticRoute )
app.use("/api/Master_item",Master_itemRoute)
app.use("/api/Master_supplier",Master_supplier)
app.use("/api/Tr_qc",Tr_qc)







app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb://localhost:27017/internal-amerta"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
