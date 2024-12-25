const express = require('express');
const parser = require('body-parser');
const expressgpost = require("./router/post/contactperson");
const expressget = require('./router/get/getuser');
require('dotenv').config();
const connectionM = require('./schema/main_connection')

const app = express();
connectionM;

app.listen(3000, () => {
    console.log("created server ");
});

app.use( parser.json());
app.use(expressgpost);

app.use(expressget);
