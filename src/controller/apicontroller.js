const verificar = (req, res) => {

  try {
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    console.log("Datos recibidos:", { token, challenge });
    if (mode && token) {
      if (mode === "subscribe" && token === config.verifyToken) {
        console.log("Webhook verificado correctamente");
        res.status(200).send(challenge);
      } else {
        console.error("Fallo en verificación:", { tokenRecibido: token, tokenEsperado: tokenandercode });
        res.sendStatus(403);
      }
    }
  } catch (e) {
    res.status(400).send();
  }

}

const recibir = (req, res) => {
  try {
    var entry = (req.entry);

    console.log(entry);


    res.send("EVENT_RECEIVED 111");
  } catch (e) {
    console.log(e);
    res.send("EVENT_RECEIVED");
  }
}

module.exports = {
  verificar,
  recibir
};