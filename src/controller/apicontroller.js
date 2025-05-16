const enviarmensaje = require("../service/apiservice");

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
  console.log("=== Body recibido ===");
  // console.log(JSON.stringify(req.body, null, 2));
  try {
    const body = req.body;

    // Primero accedemos al primer elemento de entry, si existe
    const entry = Array.isArray(body.entry) && body.entry.length > 0 ? body.entry[0] : null;

    if (!entry) {
      console.log("No hay entries en el body");
      return; // O manejar error según tu lógica
    }

    // Luego accedemos al primer changes dentro de entry
    const changes = Array.isArray(entry.changes) && entry.changes.length > 0 ? entry.changes[0] : null;

    if (!changes) {
      console.log("No hay changes dentro de entry");
      return;
    }

    // Ahora sacamos value
    const value = changes.value || null;

    if (!value) {
      console.log("No hay value dentro de changes");
      return;
    }

    // Finalmente sacamos messages
    const objetoMensaje = Array.isArray(value.messages) && value.messages.length > 0 ? value.messages[0] : null;

    if (!objetoMensaje) {
      console.log("No hay mensajes dentro de value");
      return;
    }

    // Ya puedes extraer texto y numero
    const texto = objetoMensaje.text?.body || "";
    const numero = objetoMensaje.from || "";

    console.log("Texto recibido:", texto);
    console.log("Número remitente:", numero);
    
    enviarmensaje.EnviarMensajeWhastpapp(texto,numero);
    
    res.status(200).send("EVENT_RECEIVED");
  } catch (e) {
    console.error("Error:", e);
    res.status(500).send();
  }
};

module.exports = {
  verificar,
  recibir
};