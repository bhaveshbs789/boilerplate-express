require('dotenv').config()
let express = require('express');
let app = express();

app.use(express.static(__dirname + "/public"));

app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});

app.get("/", function(req, res) {
    // res.send("Hello Express");
    res.sendFile(__dirname + "/views/index.html");
})

app.get("/json", function(req, res) {
    res.json({
        "message": process.env.MESSAGE_STYLE == "uppercase" ? "HELLO JSON" : "Hello json"
    })
})






































 module.exports = app;
