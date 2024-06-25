const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

// Logistik ---------------
// Auth route 
const Auth_route = require("./routes/Auth.route.js");
// Master 
const Master_itemRoute = require("./routes/Master_item.route.js");
const Master_list_itemRoute = require("./routes/Master_list_item.route.js");
const Master_supplier = require("./routes/Master_supplier.route.js");
const Master_harga_materialRoute = require("./routes/Master_harga_material.route.js");
const Master_pengadaan_barang = require("./routes/Master_pengadaan_barang.route.js")
// Transaksi 
const Tr_logisticRoute = require("./routes/Tr_logistic.route.js");
const Tr_logisticKeluarRoute = require("./routes/Tr_logistic_keluar.route.js");
const Tr_qc = require("./routes/Tr_qc.route.js");
const cors = require("cors")
// Kelola data internal -----------
const Master_perusahaanRoute = require("./routes/Module_2/Master_perusahaan.route.js");
const Tr_taskRoute = require("./routes/Module_2/Tr_task.route.js");
const Master_penggunaRoute = require("./routes/Module_2/Master_pengguna.route.js");




const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors())



// LOGISTIK  -------------
// Auth Route 
app.use("/api/Auth", Auth_route);
// routes
app.use("/api/products", productRoute);
// Master 
app.use("/api/Master_item",Master_itemRoute);
app.use("/api/Master_list_item",Master_list_itemRoute)
app.use("/api/Master_supplier",Master_supplier)
app.use("/api/Master_harga_material",Master_harga_materialRoute)
app.use("/api/Master_pengadaan_barang",Master_pengadaan_barang)
// Transaksi 
app.use("/api/Tr_qc",Tr_qc)
app.use("/api/Tr_logistic",Tr_logisticRoute )
app.use("/api/Tr_logistic_keluar",Tr_logisticKeluarRoute )
// Kelola data internal -------------
app.use("/api/Master_perusahaan", Master_perusahaanRoute)
app.use("/api/Tr_task",Tr_taskRoute)
app.use("/api/Master_pengguna", Master_penggunaRoute)



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    // "mongodb://coba:coba123@77.37.47.90:27017/?authSource=coba"
    "mongodb://localhost:27017"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
