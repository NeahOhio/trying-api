const express = require("express");
const MasterItem = require("../models/Master_item.model.js");
const router = express.Router();
const {getMasterItem, getMasterItemid, createMasterItem, updateMasterItem,updateMasterItemStok,updatedMasterItemHistory} = require('../controllers/Master_item.controller.js');


router.get("/MasterItem/getdata/:domain", getMasterItem);
router.get("/MasterItem/getbyid/:id", getMasterItemid);

router.post("/MasterItem/create", createMasterItem);

// update a product
router.put("/MasterItem/updatebyid/:id", updateMasterItem);
router.put("/MasterItem/updatebyidItemStok/:id", updateMasterItemStok);
router.put("/MasterItem/updatebyidItemHistory/:id", updatedMasterItemHistory);




module.exports = router;