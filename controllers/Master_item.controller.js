const Master_item = require("../models/Master_item.model");

// GET BY DOMAIN
const getMasterItem = async (req, res) => {
  try {
    const MasterItem = await Master_item.find({Master_item_domain:req.params.domain, Master_item_status:"Y"});
    res.status(200).json(MasterItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// FIND ONE BY ID
const getMasterItemid = async (req, res) => {
  try {
    const { id } = req.params;
    const MasterItem = await Master_item.findById(id);
    res.status(200).json(MasterItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// CREATE 
const createMasterItem = async (req, res) => {
  try {
    const MasterItem = await Master_item.create(req.body);
    res.status(200).json(MasterItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Updated MasterItem 
const updateMasterItem = async (req, res) => {
  try {
    const { id } = req.params;

    const MasterItem = await Master_item.findByIdAndUpdate(id, req.body);

    if (!MasterItem) {
      return res.status(404).json({ message: "MasterItem not found" });
    }

    const updatedMasterItem = await Master_item.findById(id);
    res.status(200).json(updatedMasterItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// UPDATED MASTER ITEM STOK 
const updateMasterItemStok = async (req, res) => {
  try {
    const { id } = req.params;

    const MasterItem = await Master_item.findByIdAndUpdate(id, {
      item_stok:req.body.item_stok
    });

    if (!MasterItem) {
      return res.status(404).json({ message: "MasterItem not found" });
    }

    const updatedMasterItem = await Master_item.findById(id);
    res.status(200).json(updatedMasterItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Updated Master Item ngambil item history
const updatedMasterItemHistory = async(req,res) =>{
  try {
    const {id} = req.params;
    const MasterItem = await Master_item.findByIdAndUpdate(id, {
      // item_stok:req.body.item_stok,
      item_stok:req.body.item_stok,
      $push:{item_history:req.body.item_history}}
      );

    if(!MasterItem){
      return res.status(404).json({ message:"MasterItem tidak ada"});
    }
    const updatedMasterItemHistory = await Master_item.findById(id);
    res.status(200).json(updatedMasterItemHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {
  getMasterItem,
  getMasterItemid,
  createMasterItem,
  updateMasterItem,
  updateMasterItemStok,
  updatedMasterItemHistory
};
