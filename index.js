const checkDay = require("./checkDay");
const sendEmail = require("./sendEmail");
const { dayToSend } = require("./dataBase/config");
let date_last_send = ""
function start() {
  console.log("online...")
  const dateNow = new Date().toLocaleString("pt-br").substring(0,10)
  if (checkDay(dayToSend) && date_last_send != dateNow) {
    sendEmail();
    date_last_send =  dateNow
    console.log(`data do último envio ${date_last_send}`)
  }
}

// executa a primeira vez
start();
// executa a cada 6 horas
setInterval(start, 60000 * 60 * 6);

