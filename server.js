const express = require('express');
const app = express();

app.use("/test", (req, res) => {
    res.send({message: 'helloWorld'});
    res.end();

});

module.exports = app;
