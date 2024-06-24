const express = require("express");
const Tr_task = require("../../models/Module_2/Tr_task.model.js");
const app = express();


const router = express.Router();
const { 
  getTrTask,
  getTrTaskid,
  createTrTask,
  createTrTaskGambar,
  updateTrTask,
  updateTrTaskGambar
 } = require('../../controllers/Tr_task.controller.js');


router.get("/gettask", getTrTask);
router.get("/gettaskbyid/:id", getTrTaskid);
router.post("/createtask", createTrTask);
router.post("/createtaskwithimage", createTrTaskGambar);
router.put("/updatetrtask/:id", updateTrTask);
router.put("/updatetrtaskwithimage/:id", updateTrTaskGambar);




module.exports = router;