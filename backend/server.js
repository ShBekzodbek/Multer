const express = require("express");

const fs = require('fs');

const path = require('path');

const multer = require("multer");

const upload = multer({ dest: "uploads/" });

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.post("/upload_files", upload.array('files'), uploadFiles);

function uploadFiles(req, res, next) {
    console.log()
    fs.writeFileSync(path.join(__dirname, 'uploads', 'text.txt'),Buffer.from(req.files),
        (err) => {
            if (!err) {
                console.log('Uploaded');
            }
            console.log('Error !');
            console.log(err);

        })
}


app.listen(5000, () => {
    console.log(`Server started...`);
});