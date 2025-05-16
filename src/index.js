const express = require('express');
const app = express();
const router = require('./routes/ruta');

app.use(express.json());
app.use('/api', router);

const PORT = process.env.PORT || 10000


app.listen(PORT,() => {
  console.log("Chat---BOt puerto: "+ PORT);
})


