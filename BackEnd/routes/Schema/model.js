const mongoose = require('mongoose')
const Schema = new mongoose.Schema({
    name:{
        type:"String",
        required:"true"
    },
    place:{
        type:"String",
        required:"true"

    },
    salary:{
        type:"number",
        required:"true"
    }
})
module.exports = mongoose.model('userdata',Schema)