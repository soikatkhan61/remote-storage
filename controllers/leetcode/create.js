const leetcode_model = require('../../models/leetcode/Leetcode_model')

exports.createUser = async(req,res) =>{
    let new_model = new leetcode_model({
        username: "soikatkhan61",
        email: "soikatkhan61@gmail.com"
    })

    try{
        let createdPost = await new_model.save()
        res.send(createdPost)
    }catch(e){
        console.log(e)
    }
}