const http = require('express').Router();
const cpschema = require('../../schema/createperson');

http.get("/api/v1/getuser",async(req,res)=>{
   
   try {
    const getuser = await cpschema.find({});
    res.status(200).json({
        'sucess':true,
        getuser
    })
   } catch (error) {
    res.status(300).json({
        'sucess':false
    })
   }
});

module.exports = http;