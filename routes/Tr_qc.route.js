const express = require("express");
const TrQc = require("../models/Tr_qc.model.js");
const router = express.Router();
const {getTrQc, getTrQcById, createTrQc, updateTrQc,updatedTrQcTahap} = require('../controllers/Tr_qc.controller.js');


router.get("/TrQc/getdata/:domain", getTrQc);
router.get("/TrQc/getbyid/:id", getTrQcById);

router.post("/TrQc/create", createTrQc);

// update a product
router.put("/TrQc/updatebyid/:id", updateTrQc);
router.put("/TrQc/updatebyTahap/:id", updatedTrQcTahap);





module.exports = router;