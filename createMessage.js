const bestSelling = require("./dataBase/bestSelling");
const promotions = require("./dataBase/promotions");

function createMessage(name) {
  return `
    Olá ${name}, este mês estamos com muitas novidades especiais pra você,
  acabaram de chegar novos modelos de veículos com condições de pagamento que
  são imperdíveis é tudo em até 70x com taxa ZERO!!!

  Confira essas promoções!!!

    ${promotions[1]}    
    ${promotions[2]}

  Mas vendidos!!!  
    ${bestSelling[1]}
    
    E tem muito mais!!!
      faça-nos uma vista, ganhe um lindo brinde.

    Fale conosco: 
    e-mail: sac@carstore.com.br
    whatsApp: (81) 4000-0004

    nosso endereço:
    Rua dos Sonhos, nº 1101, Bairro: Dreaws
    Recife - PE  
    
  `;
}

module.exports = createMessage;

  
 


