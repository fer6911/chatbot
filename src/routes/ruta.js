const express = require('express');
const router = express.Router();
const apicontroller = require('../controller/apicontroller');


router.get('/', apicontroller);
router.post('/', (req, res) => {
  console.log("Webhook recibido:", req.body);
  res.sendStatus(200);
});
