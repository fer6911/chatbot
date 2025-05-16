const express = require('express');
const router = express.Router();
const apicontroller = require('../controller/apicontroller');

router
  .get("/webhook", apicontroller.verificar) 
  .post("/webhook", apicontroller.recibir); 
module.exports = router;