const verificar = (req, res) => {

  try {
    const tokenmeta = "TOKENAPIMETA"
    const token =  req.query["hub.verify_token"]
    let challenge = req.query["hub.challenge"]

    if(challenge !== null && token !== null && token !== tokenmeta){
      res.send(challenge)
    }else {
      res.status.send(400).send()
    }
  console.log(req);

  } catch (error) {
    res.status.send(400).send()
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