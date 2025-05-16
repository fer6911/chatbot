const https = require("https");

function EnviarMensajeWhastpapp(texto, number) {

  texto = texto.toLowerCase();

  let data;
  if (texto.includes("Hola")) {
    data = JSON.stringify({
      "messaging_product": "whatsapp",
      "recipient_type": "individual",
      "to": number,
      "type": "text",
      "text": {
        "preview_url": false,
        "body": "🚀 Hola, Como estas, Bienvenido."
      }
    });
  }
  else {
    console.log("No hay un mensaje definido para este texto.");
    return;
  }

  const options = {
    host: "graph.facebook.com",
    path: "/v22.0/663678286826514/messages",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "EAAKHZBxoay4ABOwORAZAOHCwxyRCDJDJHIbiIHgRqhMUwKEsJOncRlXAeUg8s1r1KOjEN5yUZBwzbXpMIOWZAZCJJlnnKiRG9eaZAetG0zwm5AklSAlNmYJNZB1lGo2dJCi33jtG8TehlHYOsgPnD8p74VRAEekGUtKDTVCyGoToSzFwMJum2WDKEaGQOUPAiyByPKgvo94uJNfmsiCxgZCdJfbHU9xaEzz3JH6cEH55OoYZD"
    }
  };

  const req = https.request(options, (res) => {
    let responseData = "";
    res.on("data", (chunk) => {
      responseData += chunk;
    });
    res.on("end", () => {
      console.log("Respuesta de Facebook:", responseData);
    });
  });

  req.on("error", (e) => {
    console.error("Error en la petición HTTPS:", e);
  });

  req.write(data);  // Aquí enviamos el body JSON correctamente
  req.end();
}

module.exports = {
  EnviarMensajeWhastpapp
}