const leetcode_model = require('../../models/leetcode/Leetcode_model')

exports.getInfo = async(req,res) =>{
    let token = req.params.token

    try{
        let findedToken = await leetcode_model.findOne({username:token})
        console.log(findedToken)
        if(findedToken){
            res.send(findedToken)
        }
    }catch(e){
        console.log(e)
    }
}