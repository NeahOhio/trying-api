const Tr_task = require("../../models/Module_2/Tr_task.model");
// GET BY DOMAIN
const getTrTask = async (req, res) => {
  try {
    const TrTask = await Tr_task.find({ Tr_task_status: "Y", Tr_task_domain: req.params.domain });
    res.status(200).json(TrTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FIND ONE BY ID
const getTrTaskid = async (req, res) => {
  try {
    const { id } = req.params;
    const TrTask = await Tr_task.findById(id);
    res.status(200).json(TrTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// FIND WITH CATEGORY(MT,PSB,INFRA)
const getTrTaskByCategory = async (req, res) => {
  try {
    const TrTask = await Tr_task.find({ Tr_status: "Y", Tr_task_domain: req.params.domain, Tr_task_kategori: req.params.kategori });
    res.status(200).json(TrTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getTrTaskByPicName = async (req, res) => {
  try {
    const TrTask = await Tr_task.find({ Tr_status: "Y", 'Tr_task_pic.Tr_task_pic_name': req.params.pic_name });
    res.status(200).json(TrTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE 
const createTrTask = async (req, res) => {
  try {
    const TrTask = await Tr_task.create(req.body);
    res.status(200).json(TrTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// TRIAL CREATE WITH GAMBAR 
const createTrTaskGambar = async (req, res) => {
  try {
    const { Tr_gambar, ...dynamicFields } = req.body;
    const newData = new Tr_task({ ...dynamicFields, Tr_gambar: req.file.filename });
    await newData.save()
    res.status(201).json({ message: 'Gambar sudah terupload' });
  } catch (error) {
    console.error('Gagal menyimpan data', error);
    res.status(500).json({ message: error.message });
  }
};
// updated TrTask with gambar 
const updateTrTaskGambar = async (req, res) => {
  try {
    const { id } = req.params;
    const { Tr_gambar, ...dynamicFields } = req.body;
    const TrTask = await Tr_task.findByIdAndUpdate(id, { Tr_gambar: req.file.filename, ...dynamicFields });

    if (!TrTask) {
      return res.status(404).json({ message: "TrTask not found" });
    }

    const updatedTrTask = await Tr_task.findById(id);
    res.status(200).json(updatedTrTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Updated TrTask 
const updateTrTask = async (req, res) => {
  try {
    const { id } = req.params;

    const TrTask = await Tr_task.findByIdAndUpdate(id, req.body);

    if (!TrTask) {
      return res.status(404).json({ message: "TrTask not found" });
    }

    const updatedTrTask = await Tr_task.findById(id);
    res.status(200).json(updatedTrTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getTrTask,
  getTrTaskid,
  getTrTaskByCategory,
  getTrTaskByPicName,
  createTrTask,
  createTrTaskGambar,
  updateTrTask,
  updateTrTaskGambar
};
