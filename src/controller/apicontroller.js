const verificar = (req, res) => {

    try{
        var tokenandercode = "ANDERCODENODEJSAPIMETA";
        var token = req.query["hub.verify_token"];
        var challenge = req.query["hub.challenge"];

        if (challenge != null && token != null && token == tokenandercode){
            res.send(challenge);
        }else{
            res.status(400).send();
        }

    }catch(e){
        res.status(400).send();
    }

}

const recibir = (req, res) => {
  res.send("EVENT_RECEIVED");
  console.log("Recibido");
};

module.exports = {
  verificar,
  recibir
};