const {Schema , model} = require('mongoose')

const leetcode_model_schema = new Schema({
    username :{
        type: String,
        trim : true,
        required: true
    },
    email:{
        type:String,
        trim: true,
        required: true
    },
    closeWebPage:{
        type: Boolean
    },
    isSuccess:{
        type:Boolean
    },
    token :{
        type : String,
        trim : true
    },
    KEY:{
        type: String,
        trim : true
    }

},{
    timestamps:true
})

const leetcode_model = model('leetcode_model',leetcode_model_schema)

module.exports = leetcode_model