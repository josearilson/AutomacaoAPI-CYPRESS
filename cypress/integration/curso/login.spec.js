describe('Login de usuario Alura PIC', () => {

    beforeEach(() => {
        cy.visit('/')
    })


    it('Valida usuario Disponivel', () => {
        cy.usuarioDisponivel('teste')
    })


    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.get('button[type="submit"]').type('{enter}')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuario invalido', () => {
        cy.login(Cypress.env('userName'), '1234')
        cy.get('button[type="submit"]').type('{enter}')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        })
    })

})