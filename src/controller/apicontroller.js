const verificar = (req, res) => {

  try {
    const tokenmeta = "TOKENAPIMETA"
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];

    console.log("Token recibido:", token);
    console.log("Challenge recibido:", challenge);

    if (token && token === VERIFY_TOKEN) {
      console.log("Webhook verificado!");
      res.status(200).send(challenge);
    } else {
      console.error("Token inválido");
      res.sendStatus(403);
    }
    console.log(req);

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