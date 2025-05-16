const config = {
  verifyToken: "ANDERCODENODEJSAPIMETA"
};

const verificar = (req, res) => {
  try {
    let mode = req.query["hub.mode"];
    let token = req.query["hub.verify_token"];
    let challenge = req.query["hub.challenge"];

    console.log("Datos recibidos:", { mode, token, challenge });

    if (mode && token) {
      if (mode === "subscribe" && token === config.verifyToken) {
        console.log("Webhook verificado correctamente");
        return res.status(200).send(challenge);
      } else {
        console.error("Fallo en verificación:", { tokenRecibido: token, tokenEsperado: config.verifyToken });
        return res.sendStatus(403);
      }
    } else {
      return res.sendStatus(400);
    }
  } catch (e) {
    console.error("Error en la verificación:", e);
    res.status(500).send();
  }
};

const recibir = (req, res) => {
  try {
    const entry = req.entry;

      console.log("entry:-----"+entry);
   
  } catch (e) {
    console.error("Error al recibir webhook:", e);
    res.status(500).send();
  }
};

module.exports = {
  verificar,
  recibir
};