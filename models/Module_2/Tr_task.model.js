const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TrtaskSchema = new Schema({
    Tr_task_kode: {
        type: String
    },
    Tr_task_status: {
        type: String
    },
    Tr_task_domain: {
        type: String,
        required: true
    },
    Tr_task_priority: {
        type: String,
        required: true
    },
    // PSB,MT,INFRA 
    Tr_task_kategori:{
        type:String
    },
    Tr_task_created: {
        type: String, 
    },
    Tr_task_detail:{
        type:Array,
        default:"[]"
    },
    Tr_task_pic:{
        type:String
    },
    Tr_task_pegawai_list_penangan:{
        type:Array,
        default:"[]"
    }
});
const Tr_task = mongoose.model('Tr_task', TrtaskSchema);
module.exports = Tr_task;