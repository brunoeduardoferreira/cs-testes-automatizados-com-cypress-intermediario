/// <reference types="Cypress"/>

const faker = require("faker");

describe('Create Issue', () => {
  // cria um objeto com os dados para criaçao do projeto e da issue
  const issue = {
    title: `issue-${faker.random.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.random.uuid()}`,
      description: faker.random.words(5)
    }
  }

  before(() => {
    // Faz o Login
    cy.login();
    // Cria o projeto
    cy.api_createProject(issue.project);
  })
  // Cria a issue
  it('successfully', () => {
    cy.gui_createIssue(issue)
    // Assertion Verifica se depois do processo feito de criaçao da issue ele encontra o titulo da issue e a descricao
    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})