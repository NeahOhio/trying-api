const Master_pengguna = require("../../models/Module_2/Master_pengguna.model");

// GET BY DOMAIN
const getMasterpengguna = async (req, res) => {
  try {
    const Masterpengguna = await Master_pengguna.find({  pengguna_status: "Y", pengguna_domain:req.params.domain });
    res.status(200).json(Masterpengguna);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FIND ONE BY ID
const getMasterpenggunaid = async (req, res) => {
  try {
    const { id } = req.params;
    const Masterpengguna = await Master_pengguna.findById(id);
    res.status(200).json(Masterpengguna);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE 
const createMasterpengguna = async (req, res) => {
  try {
    const Masterpengguna = await Master_pengguna.create(req.body);
    res.status(200).json(Masterpengguna);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// TRIAL CREATE WITH GAMBAR 
const createMasterpenggunaGambar = async (req, res) => {
  try {
    const { pengguna_gambar, ...dynamicFields } = req.body;
    const newData = new Master_pengguna({ ...dynamicFields, pengguna_gambar: req.file.filename });
    await newData.save()
    res.status(201).json({ message: 'Gambar sudah terupload' });
  } catch (error) {
    console.error('Gagal menyimpan data', error);
    res.status(500).json({ message: error.message });
  }
};
// updated Masterpengguna with gambar 
const updateMasterpenggunaGambar = async (req, res) => {
  try {
    const { id } = req.params;
    const { pengguna_gambar, ...dynamicFields } = req.body;
    const Masterpengguna = await Master_pengguna.findByIdAndUpdate(id, { pengguna_gambar: req.file.filename, ...dynamicFields });

    if (!Masterpengguna) {
      return res.status(404).json({ message: "Masterpengguna not found" });
    }

    const updatedMasterpengguna = await Master_pengguna.findById(id);
    res.status(200).json(updatedMasterpengguna);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Updated Masterpengguna 
const updateMasterpengguna = async (req, res) => {
  try {
    const { id } = req.params;

    const Masterpengguna = await Master_pengguna.findByIdAndUpdate(id, req.body);

    if (!Masterpengguna) {
      return res.status(404).json({ message: "Masterpengguna not found" });
    }

    const updatedMasterpengguna = await Master_pengguna.findById(id);
    res.status(200).json(updatedMasterpengguna);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getMasterpengguna,
  getMasterpenggunaid,
  createMasterpengguna,
  createMasterpenggunaGambar,
  updateMasterpengguna,
  updateMasterpenggunaGambar,
};
