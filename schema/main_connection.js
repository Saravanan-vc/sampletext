const mongoose = require("mongoose");

const connectionString = process.env.MONGODB_ID;
const connection = mongoose.connect(connectionString,{ useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => { console.log('connected sucess') }).
    catch((e) => { console.log('something gone wrong');console.log(e) });

module.exports = connection;