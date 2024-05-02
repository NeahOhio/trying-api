const express = require("express");
const TrLogistic = require("../models/Tr_logistic.model.js");
const router = express.Router();
const {getTrLogistics, getTrLogistic, createTrLogistic, updateTrLogistic,updatedTrLogisticStatustiba, updatedTrLogisticTransaksiDibatalkan, deleteTrLogistic} = require('../controllers/Tr_logistic.controller.js');


router.get("/TrLogistic/getdata/:domain", getTrLogistics);
router.get("/TrLogistic/getbyid/:id", getTrLogistic);

router.post("/TrLogistic/create", createTrLogistic);

// update a product
router.put("/TrLogistic/updatebyid/:id", updateTrLogistic);
router.put("/TrLogistic/updatebyidStatusTiba/:id", updatedTrLogisticStatustiba);
router.put("/TrLogistic/updatebyidTransaksiDibatalkan/:id", updatedTrLogisticTransaksiDibatalkan);


// delete a product
router.delete("/TrLogistic/deletebyid/:id", deleteTrLogistic);




module.exports = router;