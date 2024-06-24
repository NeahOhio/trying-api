const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PerusahaanSchema = new Schema({
    Perusahaan_nama: {
        type: String
    },
    Perusahaan_keterangan: {
        type: String
    },
    Perusahaan_domain: {
        type: String,
        required: true
    },
    Perusahaan_status: {
        type: String,
        required: true
    },
    Perusahaan_gambar:{
        type:String
    },
    Perusahaan_created: {
        type: String,
    },
});

const Perusahaan = mongoose.model('Perusahaan', PerusahaanSchema);

module.exports = Perusahaan;