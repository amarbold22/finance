const { Router } = require("express");
const { upload } = require("../controller/imageController");
const { imageUpload } = require("../utils/upload");

const router = Router();

router.route("/upload").post((req,res,next)=>{
    console.log("LOGG working")
    next()
}, imageUpload.single("image"), upload);

module.exports = router;