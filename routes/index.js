const express = require('express');
const router = express.Router();

const multer = require("multer");
const upload = multer({ dest: "public/" });

const {handleUpload} = require("../components/upload");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({title: 'Express'});
});

router.post("/", upload.single("image"), function (req, res, next) {
    handleUpload(req.file, req.body).then(result => {
        res.json({result});
    });
});

module.exports = router;
