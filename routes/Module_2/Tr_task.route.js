const express = require("express");
const Tr_task = require("../../models/Module_2/Tr_task.model.js");
const app = express();


const router = express.Router();
const { 
  getTrTask,
  getTrTaskid,
  getTrTaskByCategory,
  createTrTask,
  createTrTaskGambar,
  updateTrTask,
  updateTrTaskGambar
 } = require('../../controllers/Module_2/Tr_task.js');


router.get("/gettask/:domain", getTrTask);
router.get("/gettaskbyid/:id", getTrTaskid);
router.get("/gettaskbycategory/:domain/:kategori", getTrTaskByCategory);

router.post("/createtask", createTrTask);
router.post("/createtaskwithimage", createTrTaskGambar);
router.put("/updatetrtask/:id", updateTrTask);
router.put("/updatetrtaskwithimage/:id", updateTrTaskGambar);




module.exports = router;