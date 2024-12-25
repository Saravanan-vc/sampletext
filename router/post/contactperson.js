const http = require('express').Router();
const cpschema = require('../../schema/createperson');

http.post("/api/v1/adduser",async(req,res)=>{
    const {name,phone}= req.body;
   try {
    const created = cpschema({
        name:name,
        phone:phone
    });
    const saved =await created.save();
    res.status(200).json({
        'sucess':true
    })
   } catch (error) {
    res.status(300).json({
        'sucess':false
    })
   }
});

module.exports = http;