const express = require ('express');

const router = express.Router();

const controller = require("../controllers/test.controller")

router.get('/',controller.getAllTest);

router.get("/stats",()=>{

});

router.get("/:id",()=>{

});



module.exports = router