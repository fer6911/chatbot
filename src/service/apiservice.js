const https = require("https");

function EnviarMensajeWhastpapp(texto,number){

    texto = texto.toLowerCase();

    if (texto.includes("hola")){
        var data = JSON.stringify({
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

    const options = {
        host : "graph.facebook.com",
        path : "/v22.0/663678286826514/messages",
        method : "POST",
        body : data,
        headers : {
            "Content-Type" : "application/json",
            Authorization :"EAAKHZBxoay4ABOZCJOZBlTEsj0rcsrZBPkUnK5D44yq4b0qVPZCrA14kwAZCA7jrlN2yaFB1ZAtg29lG8MtTMBdn5Mor7nB7KjzbmAb0ZBsLMnxlX9Q0gmgc69I5QRkosxaOQ7ZAGp2WEqfCZCPVEKWxspPn5MABBGX8qTyYpvanQ9e3BN9KGQ4PcV8FPACkAXTxfLrhlUE0XsS9mOn4uWYPjX7zMBreL7ejD8PkoyHsIkzhoZD"
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