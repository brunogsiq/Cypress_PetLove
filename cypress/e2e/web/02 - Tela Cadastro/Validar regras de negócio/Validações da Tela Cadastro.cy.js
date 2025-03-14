/// <reference types="cypress" />

let tela = 1;
let funcao = 1;

describe(`${++tela}.${++funcao} - Tela Cadastro.`, () =>
{
	let cenario = 0;
	let teste = 0;

	beforeEach(() =>
	{
		cy.visit(Cypress.env("baseUrl"));

		cy.wait(2500);
	});

	context(`Cenário ${++cenario} - Validar regras de negócio.`, () =>
	{
		it(`Teste ${++teste}`, () =>
		{
			cy.validarRegrasDeNegocioTelaCadastro();
		});
	});
});