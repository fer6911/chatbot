const verificar = (req, res) => {
res.send("Verificado")
}
const recibir = (req, res) => {
  res.send("Recibido")
  
}

module.exports = {
  verificar,
  recibir
}