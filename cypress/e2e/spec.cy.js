const { after, before } = require("lodash");

describe('wing_dvp', () => {
  beforeEach(() => {
    cy.visit('https://www.wingo.com')
    cy.contains('VUELO').should('have.text', 'VUELO');
    cy.wait(8000);
    //Selecciona los puntos de destino e ida
    cy.get('.styledSelect.styledSelectOrigen').should('be.visible').click({ force: true });
    cy.get('.textCity').contains('Bogotá (BOG) El Dorado').click({ force: true });
    cy.get('#comboDestino > [data-cod="CLO"] > .textCity').contains('Cali (CLO) Alfonso Bonilla Aragón').click({ force: true });
  
    //Selecciona las fechas para los vuelos
    cy.wait(8000);
    cy.get('.next').click({ multiple: true, force: true });
    cy.get('.next').click({ multiple: true, force: true });
    cy.get('.next').click({ multiple: true, force: true });
  
    cy.get('#inputOutboundDate > .cont-calendar > .cont-months > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(3) > :nth-child(3) > .day').click({ force: true });
    cy.get('#date-window-container > .date-picker-wrapper > :nth-child(1) > :nth-child(1) > .month-wrapper > .month1 > tbody > :nth-child(4) > :nth-child(5) > .day').click({ force: true });
  
    //Selecciona la cantidad de pasajeros
    cy.get('#selectPasj > .info-airport').click({ force: true });
    cy.get('.plus').first().click({ force: true });
  
    //Selecciona la opcion de Ida y Vuelta
    cy.get('#btnIdaVuelta').click();
    //Busca el vuelo
    cy.wait(5000); 
    cy.get('.btn-search').click();
    cy.window().then((win) => {
      const tab = win.document.querySelectorAll('window'); // Obtener todas las pestañas abiertas
      const tabIndex = 1; // Índice de la pestaña a la que quieres cambiar (empezando desde 0)
      tab[tabIndex].focus(); // Cambiar el enfoque a la pestaña especificada
    }); 
    
  });   

  it('Datos del Vuelo', () => {
    cy.visit('https://booking.wingo.com/es/search/BOG/CLO/2023-09-13/2023-10-20/2/0/0/0/COP/0/0');
    cy.wait(30000); // Espera opcional para asegurarte de que la página se cargue completamente
    cy.contains('Vuelo de ida');
    cy.wait(10000);
    cy.get('.card-info.noLoader').first().click({ force: true });
    cy.get('.card-info.noLoader').click(); //.click({ force: true });
    cy.wait(5000);
    cy.get('button.btn-continuar').click(); 
  });

});
 