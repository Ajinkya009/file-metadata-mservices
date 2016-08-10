var express = require("express");
var path = require("path");
var app = express();
var multer = require("multer");
var upload = multer();
app.use(express.static(path.resolve(__dirname,'front_end')));
app.post("/get-metadata",upload.single('file'),function(req,res){
    res.json({Filesize: req.file.size});
});

app.listen(process.env.PORT);
