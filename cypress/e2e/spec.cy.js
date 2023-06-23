describe('wing_dvp', () => {
  beforeEach(() => {
    cy.visit('https://www.wingo.com')
    cy.contains('VUELO').should('have.text', 'VUELO');
  });

  it('Datos del Vuelo', () => {
    cy.wait(5000);
    //Selecciona los puntos de destino e ida
    cy.get('.styledSelect.styledSelectOrigen').should('be.visible').click({ force: true });
    cy.get('.textCity').contains('Bogotá (BOG) El Dorado').click({ force: true });
    cy.get('#comboDestino > [data-cod="CLO"] > .textCity').contains('Cali (CLO) Alfonso Bonilla Aragón').click({ force: true });

    //Selecciona las fechas para los vuelos
    cy.wait(5000);
    cy.get('.next').click({ multiple: true, force: true });

    cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(3) > :nth-child(3) > .day').click({ force: true });
    cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(4) > :nth-child(5) > .day').click({ force: true });

    //Selecciona la cantidad de pasajeros
    cy.get('#selectPasj > .info-airport').click({ force: true });
    cy.get('.plus').first().click({ force: true });

    //Selecciona la opcion de Ida y Vuelta
    cy.get('#btnIdaVuelta').click();
    //Busca el vuelo
    cy.get('.btn-search').click();

    
  });

});
