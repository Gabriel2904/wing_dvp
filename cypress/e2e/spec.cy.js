const { after, before } = require("lodash");

describe("wing_dvp", () => {
  beforeEach(() => {
    cy.visit("https://www.wingo.com");
    cy.contains("VUELO").should("have.text", "VUELO");
    cy.wait(8000);    
  });
  
  it("precios_vuelo", () => {
    //Selecciona los puntos de destino e ida
    cy.get(".styledSelect.styledSelectOrigen")
      .should("be.visible")
      .click({ force: true });
    cy.get(".textCity")
      .contains("Bogotá (BOG) El Dorado")
      .click({ force: true });
    cy.get('#comboDestino > [data-cod="CLO"] > .textCity')
      .contains("Cali (CLO) Alfonso Bonilla Aragón")
      .click({ force: true });
  
    //Selecciona las fechas para los vuelos
    cy.wait(8000);
    cy.get(".next").click({ multiple: true, force: true });
    cy.get(".next").click({ multiple: true, force: true });
    cy.get(".next").click({ multiple: true, force: true });
  
    cy.get(
      "#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(3) > :nth-child(3) > .day"
    ).click({ force: true });
    cy.get(
      "#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(4) > :nth-child(5) > .day"
    ).click({ force: true });
  
    //Selecciona la cantidad de pasajeros
    cy.get("#selectPasj > .info-airport").click({ force: true });
    cy.get(".plus").first().click({ force: true });
  
    //Selecciona Moneda de Pago
    cy.get(".styledSelect.styledSelectMoneda").click();
    cy.get('#currencies > :nth-child(1)').click();
  
    //Selecciona la opcion de Ida y Vuelta
    cy.get("#btnIdaVuelta").click();
    //Busca el vuelo
    cy.wait(9000);
    cy.get(".btn-search.bt-search").click().then(($el) => {
      const url = $el.attr("href"); 
      cy.window().then((win) => {
        win.open(url);
      });
    });
    
  });
  
  
  it("precios_vuelo", () => {
    cy.wait(50000); // Espera opcional para asegurarte de que la página se cargue completamente  
   
    cy.contains("Vuelo de ida");
    cy.wait(10000);
    cy.get('#vuelos-regreso > .container-selected > .cursor > [loadbundle=""] > :nth-child(1) > .card-list > :nth-child(1) > .card-list-item > .card-info').click({ force: true });
    cy.wait(5000);
    cy.get("button.btn-continuar").click();
  });
  
});
