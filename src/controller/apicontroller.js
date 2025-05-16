const verificar = (req, res) => {

  try {
    var tokenandercode = "ANDERCODENODEJSAPIMETA";
    var token = req.query['hub.verify_token'];
    var challenge = req.query['hub.challenge'];

    console.log("Datos recibidos:", { token, challenge }); 
    if (challenge != null && token != null && token == tokenandercode) {
      console.log("Webhook verificado correctamente");
      return res.status(200).send(challenge);
    } else {
      console.error("Fallo en verificación:", { tokenRecibido: token, tokenEsperado: tokenandercode });
      return res.status(400).send("Token inválido o falta challenge");
    }

  } catch (e) {
    res.status(400).send();
  }

}

const recibir = (req, res) => {
  res.send("EVENT_RECEIVED");
  console.log(req);
  console.log("Recibido");
};

module.exports = {
  verificar,
  recibir
};