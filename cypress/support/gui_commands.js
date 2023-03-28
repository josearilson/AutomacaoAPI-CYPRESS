
Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname = "userName"]').type(nome)
    cy.get('input[formcontrolname="password"]').type(senha, { log: false })//nao mostra a senha com o comando logFalse

})


Cypress.Commands.add('usuarioDisponivel', (nome) => {
    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.contains('button', 'Register').click();




});


Cypress.Commands.add('Registra_Usuario', (email,) => {

    cy.contains('a', 'Register now').click();
    cy.get('input[formcontrolname = "email"]').type(email);
    cy.contains('button', 'Register').click();






});


Cypress.Commands.add('Email_fullName', (email, fullName) => {
    cy.get('input[formcontrolname="email"]').type(email)
    cy.get('input[formcontrolname="fullName"]').type(fullName)
});

Cypress.Commands.add('LoginValid', (email, senha) => {




})
