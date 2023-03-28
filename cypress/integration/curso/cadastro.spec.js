describe('Cadastro de usuario Alura PIC', () => {

    beforeEach(() => {
        cy.visit('/')

    })


    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {

        it(`registrar novo usuario ${usuario.username}`, () => {
            cy.contains('a', 'Register now').type('{enter}')
            cy.contains('button', 'Register').type('{enter}')
            cy.get('input[formcontrolname = "email"]').type(usuario.email);
            cy.get('input[formcontrolname = "fullName"]').type(usuario.fullName);
            cy.get('input[formcontrolname = "userName"]').type(usuario.username);
            cy.get('input[formcontrolname = "password"]').type(usuario.password);
            cy.contains('button', 'Register').type('{enter}')
        })

    });

    it('Valida usuario Disponivel', () => {
        cy.usuarioDisponivel('teste')
    })

})