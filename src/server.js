const express = require('express');
const cors = require('cors');
const app = express();
const server = require('http').createServer(app);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.listen(3002, function(){console.log("start app");});
