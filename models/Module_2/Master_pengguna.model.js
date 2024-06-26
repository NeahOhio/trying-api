const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PenggunaSchema = new Schema({
    pengguna_nama: {
        type: String,
        required: true
    },
    pengguna_id:{
        type: String,
        required: true
    },
    pengguna_status: {
        type: String,
        required: true
    },
    pengguna_alamat: {
        type: String,
        required: true
    },
    pengguna_detail_inet: {
        type: Object,
        required: true
    },
    pengguna_detail_langganan:{
        type:Object,
        required: true
    },
    pengguna_sales:{
        type:String,
        required: true
    },
    pengguna_pic:{
        type:Object
    },
    pengguna_alat:{
        type:Array,
        default:"[]"
    },
    pengguna_list_pegawai_pasang:{
        type:Array,
        default:"[]"
    },
    pengguna_created:{
        type: String,
        required: true
    },
    pengguna_type:{
        type:String,
        required: true
    },
    pengguna_akses:{
        type:Object,
        required: true
    },
    pengguna_code:{
        type:String,
        required: true
    }
});

const Master_pengguna = mongoose.model('Master_pengguna', PenggunaSchema);

module.exports = Master_pengguna;