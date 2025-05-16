const verificar = (req, res) => {

  try {
    const tokenmeta = "TOKENAPIMETA"
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    console.log(`Token recibido: ${token}, Challenge: ${challenge}`); 

    if (token && token === VERIFY_TOKEN) {
      console.log("Webhook verificado!");
      return res.status(200).send(challenge);
    }
    console.error("Token inválido o falta challenge");
    return res.sendStatus(403);

  } catch (error) {
    res.status(400).send()
  }


};

const recibir = (req, res) => {
  res.send("Recibido");
  console.log("Recibido");
};

module.exports = {
  verificar,
  recibir
};