const https = require("https");

function EnviarMensajeWhastpapp(texto, number) {

  texto = texto.toLowerCase();

  let data;
  if (texto) {
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
      Authorization: "Bearer EAAKHZBxoay4ABO9l2fWrfyAFgTSrhXMrS4qGmCgkKko4nRwoJA2DX8TvxhAnZBhpzUSLQkpUlS4zVVajqyfCVqw5P9mZCYLpkfTL0ZAed99BeJxWXFnLlaPPXFUymNsFwD0TiG809ZANBzYsEJX0euk8cLMZCwlrvoCDWOU0vfNBQZC6Y4exVZCdDHFu7q2vdWjVyhX9V7MZAAPFT1o29pf7G1ubLbOUBSDlmcMslkkZCl4HkZD"
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

  req.write(data);
  req.end();
}

module.exports = {
  EnviarMensajeWhastpapp
}