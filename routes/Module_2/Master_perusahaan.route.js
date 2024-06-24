const express = require("express");
const multer = require("multer");
const MasterPerusahaan = require("../../models/Module_2/Master_perusahaan.model.js");
const router = express.Router();
const
    {
        getMasterPerusahaan,
        getMasterPerusahaanid,
        createMasterPerusahaan,
        createMasterPerusahaanGambar,
        updateMasterPerusahaan,
        updateMasterPerusahaanGambar,
    } = require('../../controllers/Module_2/Master_perusahaan.controller.js');
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
router.get("/MasterPerusahaan/getdata/:domain", getMasterPerusahaan);
router.get("/MasterPerusahaan/getbyid/:id", getMasterPerusahaanid);
router.post("/MasterPerusahaan/create", createMasterPerusahaan);
router.post("/MasterPerusahaan/createimage", upload.single('Perusahaan_gambar'), createMasterPerusahaanGambar);
// update a product
router.put("/MasterPerusahaan/updatebyid/:id", updateMasterPerusahaan);
router.put("/MasterPerusahaan/updatebyidgambar/:id", upload.single('Perusahaan_gambar'), updateMasterPerusahaanGambar);
module.exports = router;