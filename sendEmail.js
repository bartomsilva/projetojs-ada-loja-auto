const customers = require("./dataBase/customers")
const createMessage = require("./createMessage")
const enviarEmail = require("./envia-email")
const subject = require("./dataBase/config")

function sendEmail() {  
  customers
    .filter((client) => client.news_letter && checkDate(client.last_acess))
    .forEach((client) => {
      try {
        const body = createMessage(client.name)
        const resultSend = enviarEmail(client.email, subject, body)
        if (resultSend.status === "Error") {
          throw new Error(resultSend.message)
        }
        console.log(`# E-mail enviado com sucesso para: ${client.email}`)
      } catch (error) {
        console.error(`
        *** Erro ao enviar e-mail para: ${client.email}
            Mensagem do erro: ${error.message}        
        `)
      }
    })
}
module.exports = sendEmail


// verifica se o cliente esteve ja loja 
// no mês anterior.
function checkDate(dateString) {
  const [day, month, year] = dateString.split("/")
  const parsedDate = new Date(year, month - 1, day)
  return new Date().getMonth() - parsedDate.getMonth() === 1
}
