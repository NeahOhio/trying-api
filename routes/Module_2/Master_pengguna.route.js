const express = require("express");
const multer = require("multer");
const Masterpengguna = require("../../models/Module_2/Master_pengguna.model.js");
const router = express.Router();
const
    {
        getMasterpengguna,
        getMasterpenggunaByPic,
        getMasterpenggunaid,
        createMasterpengguna,
        createMasterpenggunaGambar,
        updateMasterpengguna,
        updateMasterpenggunaGambar,
    } = require('../../controllers/Module_2/Master_pengguna.js');
// Multer storage configuration nanti setelah front-end jadi
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../admin_logistik/public/images')
    },
    filename: function (req, file, cb) {
        // Rename the file to avoid conflicts
        cb(null, Date.now() + '-LOGISTIK-AMERTA-' + file.originalname)
    }
});
const upload = multer({ storage: storage })
// ----
router.get("/Masterpengguna/getdata/:domain", getMasterpengguna);
router.get("/Masterpengguna/getdatabypic/:pic_name", getMasterpenggunaByPic);
router.get("/Masterpengguna/getbyid/:id", getMasterpenggunaid);
router.post("/Masterpengguna/create", createMasterpengguna);
router.post("/Masterpengguna/createimage", upload.single('pengguna_gambar'), createMasterpenggunaGambar);
// update a product
router.put("/Masterpengguna/updatebyid/:id", updateMasterpengguna);
router.put("/Masterpengguna/updatebyidgambar/:id", upload.single('pengguna_gambar'), updateMasterpenggunaGambar);
module.exports = router;