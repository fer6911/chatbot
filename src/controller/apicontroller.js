const verificar = (req, res) => {

  try {
    const tokenandercode = "ANDERCODENODEJSAPIMETA";
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

   console.log("Datos recibidos:", { token, challenge }); 

    if (challenge != null && token != null && token == tokenandercode){
      console.error("verificación:", { tokenRecibido: token, tokenEsperado: tokenandercode });
            res.send(challenge);
        }else{
          return res.status(400).send("Token inválido o falta challenge");
            res.status(400).send();
        }
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