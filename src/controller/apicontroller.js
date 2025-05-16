const verificar = (req, res) => {

  try {
    const tokenmeta = "TOKENAPIMETA";
    conts token =  req.query[""]
  } catch (error) {
    res.status.send(400).send()
  }
  res.send("Verificado");
  console.log("Verificado");
  
};

const recibir = (req, res) => {
  res.send("Recibido");
  console.log("Recibido");
};

module.exports = {
  verificar,
  recibir
};