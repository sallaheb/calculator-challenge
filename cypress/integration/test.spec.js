describe('My addition and numbers test', () => {
  it('It adds one plus two equal three', () => {

    //Arrange 
    cy.visit('http://127.0.0.1:5501/index.html')


    // ACT 
    cy.get(':nth-child(13)').click();
    cy.get('#plusoperator').click();
    cy.get(':nth-child(14)').click();
    cy.get('#equalsign').click();


    // Assert

    cy.get('.screendisplay__bottom').should("contain", "3")
  })
})

describe('My substraction and numbers test', () => {
  it('It takes away 8 from 7 equal 1', () => {

    //Arrange 
    cy.visit('http://127.0.0.1:5501/index.html')


    // ACT 
    cy.get('.Buttons-topsection > :nth-child(6)').click();
    cy.get('#minusoperator').click();
    cy.get('.Buttons-topsection > :nth-child(5)').click();
    cy.get('#equalsign').click();


    // Assert

    cy.get('.screendisplay__bottom').should("contain", "1")
  })
})


describe('My multiplication and numbers test', () => {
  it('It multiles three and four equal twelve', () => {

    //Arrange 
    cy.visit('http://127.0.0.1:5501/index.html')


    // ACT 
    cy.get(':nth-child(15)').click();
    cy.get('#multiplyoperator').click();
    cy.get(':nth-child(9)').click();
    cy.get('#equalsign').click();


    // Assert

    cy.get('.screendisplay__bottom').should("contain", "12")
  })
})

describe('My division and numbers test', () => {
  it('It divides six by five equal 1.2', () => {

    //Arrange 
    cy.visit('http://127.0.0.1:5501/index.html')


    // ACT 
    cy.get(':nth-child(11)').click();
    cy.get('#divideoperator').click();
    cy.get(':nth-child(10)').click();
    cy.get('#equalsign').click();


    // Assert

    cy.get('.screendisplay__bottom').should("contain", "1.2")
  })
})


describe('My percentage and numbers test', () => {
  it('takes 9% divides by 100', () => {

    //Arrange 
    cy.visit('http://127.0.0.1:5501/index.html')


    // ACT 
    cy.get('.Buttons-topsection > :nth-child(7)').click();
    cy.get('#percentage').click();
    cy.get('#equalsign').click();


    // Assert

    cy.get('.screendisplay__bottom').should("contain", "0.09")
  })
})


