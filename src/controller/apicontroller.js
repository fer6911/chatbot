const verificar = (req, res) => {
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