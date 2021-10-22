<img align="center" scr="https://github.com/brunoeduardoferreira/cs-testes-automatizados-com-cypress-basico/blob/main/assets/cypress_logo.png"/>

<h1 align="center"> Curso Udemy - Testes automatizados com Cypress (intermediário) </h1>

## 🚀 Sobre o Testes
Será desenvolvida uma aplicação de testes com cypress que efetuará testes de GUI no gitalb CE que está hoepedado no container do docker, 

## Ferramentas e Bibliotecas

- [Visual Studio Code]()
- [Docker]()
- [NodeJS]()
- [JavaScript]()
- [Cypress](https://docs.cypress.io)
- [Faker](https://www.npmjs.com/package/faker)

<br/>

## ⚙️ Configurações de Ambiente

### 🔨 Configurações no Docker

1 - Possuir Docker Instalado na máquina [Instalação do Docker](https://docs.docker.com/get-docker/);

2 - Clonar o Repositório que possui o Gitlab CE instalado pois ele é o app 
que será testado por nossa aplicação;

```bash
# Comando de Clone do docker
$ docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce
``` 
3 - Aguarde o fim da publicaçao do container e Configurações no docker terminadas; 

<br/>

### 🔨 Configurações no GitLab
1 - Agora é necessário acessar o GitLab CE dentro do container então acesse [http://localhost/](http://localhost/), no seu browser;

2 - Agora será necessário definir uma senha para o usuário ***root*** do gitlab, então defina a senha de sua preferência;

3 - Faça login com o usuário root com a senha definida na seção anterior

4 - Clique no avatar do usuário no canto superior direito da tela, clique no link Settings, e então clique o menu lateral esquerdo na opção Access Tokens

5 - No campo nome, digite o valor curso-cypress-intermediario, na seção Scopes marque a opção 'api', e então clique no botão 'Create personal access token'

6 - Uma mensagem de que o token foi criado com sucesso deve ser exibida, além do token propriamente dito. Copie o token clicando no botão à direita do campo e guarde-o.

7 - Gerar Access Token

<br/>

## Rodando o projeto 
```bash

$ npx cypress run

```


<br/>


## 🔗 Referências

### 🔗 Referências Oficiais do Cypress
- [Instalação do Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements)
- [Arquivo cypress.env.json](https://docs.cypress.io/guides/guides/environment-variables#Option-2-cypress-env-json)
- [Opções cypress run](https://docs.cypress.io/guides/guides/command-line#Commands)
- [cy.request](https://docs.cypress.io/api/commands/request#Syntax)
- [cy.exec](https://docs.cypress.io/api/commands/exec#Syntax)

### 🔗 Outras Referências
- [Biblioteca faker](https://www.npmjs.com/package/faker)
- [Scripts do NPM](https://docs.npmjs.com/cli/v7/using-npm/scripts) 

### Curso 
- [Udemy - Curso Testes Automatizados com cypress - Intermediário](https://www.udemy.com/course/testes-automatizados-com-cypress-intermediario/)
