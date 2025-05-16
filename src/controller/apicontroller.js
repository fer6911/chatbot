const verificar = (req, res) => {

  try {
    const tokenandercode = "ANDERCODENODEJSAPIMETA";
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

   console.log("Datos recibidos:", { token, challenge }); 

    if (challenge && token && token === tokenandercode) {
        console.log("Webhook verificado correctamente");
        return res.status(200).send(challenge);
    }
    
    console.error("Fallo en verificación:", { tokenRecibido: token, tokenEsperado: tokenandercode });
    return res.status(400).send("Token inválido o falta challenge");
  } catch (e) {
    res.status(400).send();
  }

}

const recibir = (req, res) => {
  res.send("Recibido");
  console.log("Recibido");
};

module.exports = {
  verificar,
  recibir
};