const express = require('express');
const bodyParser = require('body-Parser');
const uuid = require('uuid/v4');

const app = express();

app.use(bodyParser.json());
// CORS Headers => Required for cross- server communication

app.use((req,res,next)=>{
    res.setHeader('Acess-Control-Allow-Origin', '*');

    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type,Accept, Authorization'
    );
});
