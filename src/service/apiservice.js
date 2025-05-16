const https = require("https");

function EnviarMensajeWhastpapp(texto,number){

    texto = texto.toLowerCase();

     let data;
    if (texto.includes("hola")){
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
        host : "graph.facebook.com",
        path : "/v22.0/663678286826514/messages",
        method : "POST",
        body : data,
        headers : {
            "Content-Type" : "application/json",
            Authorization :"EAAKHZBxoay4ABOwORAZAOHCwxyRCDJDJHIbiIHgRqhMUwKEsJOncRlXAeUg8s1r1KOjEN5yUZBwzbXpMIOWZAZCJJlnnKiRG9eaZAetG0zwm5AklSAlNmYJNZB1lGo2dJCi33jtG8TehlHYOsgPnD8p74VRAEekGUtKDTVCyGoToSzFwMJum2WDKEaGQOUPAiyByPKgvo94uJNfmsiCxgZCdJfbHU9xaEzz3JH6cEH55OoYZD"
        }
    };

    const req = https.request(options,res => {
        res.on("data",d=>{
            process.stdout.write(d);
        });
    });

    req.write(data);
    req.end();
}

module.exports = {
    EnviarMensajeWhastpapp
}