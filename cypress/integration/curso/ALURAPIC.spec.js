describe('Login e registro de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com')

    })

    it('valida se estou na pagina de registro', () => {

        cy.contains('a', 'Please, login!').should('be.visible');
    })

    it('verifica mensagens validacao', () => {
        cy.contains('a', 'Register now').type('{enter}');
        cy.contains('button', 'Register').type('{enter}');
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
        cy.contains('button', 'Register').type('{enter}');
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('button', 'Register').type('{enter}');
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
        cy.contains('button', 'Register').type('{enter}');
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
    })

    it('verifica mensagens de e-mail invalido', () => {
        cy.contains('a', 'Register now').type('{enter}');
        cy.contains('button', 'Register').type('{enter}');
        cy.Email_fullName('jose.', 'JOSE ARILSON DIAS RAMALHO');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
    })

    it('verifica mensagens de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').type('{enter}');
        cy.contains('button', 'Register').type('{enter}');
        cy.login('JOSE', '1');
        cy.contains('button', 'Register').type('{enter}');
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
    })

    it('verifica mensagens de full name  com menos de 2 caracteres', () => {
        cy.contains('a', 'Register now').type('{enter}');
        cy.contains('button', 'Register').type('{enter}');
        cy.Email_fullName('jose.ramalho@alura.com.br', 'a');
        cy.contains('button', 'Register').type('{enter}');
        cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
    })

    it('lowercase', () => {
        cy.contains('a', 'Register now').type('{enter}');
        cy.login('JOSE', '123');
        cy.Email_fullName('jose.ramalho@alura.com.br', 'JOSE ARILSON DIAS RAMALHO');
        cy.contains('button', 'Register').type('{enter}');
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible');
    })

})