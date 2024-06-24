const Master_perusahaan = require("../../models/Module_2/Master_perusahaan.model");
// GET BY DOMAIN

const getMasterPerusahaan = async (req, res) => {
  try {
    const MasterPerusahaan = await Master_perusahaan.find({  Perusahaan_status: "Y" });
    res.status(200).json(MasterPerusahaan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FIND ONE BY ID
const getMasterPerusahaanid = async (req, res) => {
  try {
    const { id } = req.params;
    const MasterPerusahaan = await Master_perusahaan.findById(id);
    res.status(200).json(MasterPerusahaan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE 
const createMasterPerusahaan = async (req, res) => {
  try {
    const MasterPerusahaan = await Master_perusahaan.create(req.body);
    res.status(200).json(MasterPerusahaan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// TRIAL CREATE WITH GAMBAR 
const createMasterPerusahaanGambar = async (req, res) => {
  try {
    const { Perusahaan_gambar, ...dynamicFields } = req.body;
    const newData = new Master_perusahaan({ ...dynamicFields, Perusahaan_gambar: req.file.filename });
    await newData.save()
    res.status(201).json({ message: 'Gambar sudah terupload' });
  } catch (error) {
    console.error('Gagal menyimpan data', error);
    res.status(500).json({ message: error.message });
  }
};
// updated MasterPerusahaan with gambar 
const updateMasterPerusahaanGambar = async (req, res) => {
  try {
    const { id } = req.params;
    const { Perusahaan_gambar, ...dynamicFields } = req.body;
    const MasterPerusahaan = await Master_perusahaan.findByIdAndUpdate(id, { Perusahaan_gambar: req.file.filename, ...dynamicFields });

    if (!MasterPerusahaan) {
      return res.status(404).json({ message: "MasterPerusahaan not found" });
    }

    const updatedMasterPerusahaan = await Master_perusahaan.findById(id);
    res.status(200).json(updatedMasterPerusahaan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Updated MasterPerusahaan 
const updateMasterPerusahaan = async (req, res) => {
  try {
    const { id } = req.params;

    const MasterPerusahaan = await Master_perusahaan.findByIdAndUpdate(id, req.body);

    if (!MasterPerusahaan) {
      return res.status(404).json({ message: "MasterPerusahaan not found" });
    }

    const updatedMasterPerusahaan = await Master_perusahaan.findById(id);
    res.status(200).json(updatedMasterPerusahaan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getMasterPerusahaan,
  getMasterPerusahaanid,
  createMasterPerusahaan,
  createMasterPerusahaanGambar,
  updateMasterPerusahaan,
  updateMasterPerusahaanGambar,
};
