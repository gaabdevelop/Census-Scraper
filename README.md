# Web Scraping com Node.js e Cheerio

Este repositório contém um script simples em Node.js usando Axios e Cheerio para realizar web scraping na página do IBGE sobre a cidade de Alpestre, RS ( Estou inplementando a funcionalidade que permite aos usuários escolher a cidade na qual desejam realizar a coleta de dados. ). As informações extraídas incluem dados como o prefeito, área territorial, população residente, densidade demográfica, escolarização, IDHM, mortalidade infantil, receitas realizadas, despesas empenhadas e PIB per capita. O script é projetado para fornecer uma introdução prática ao web scraping em páginas específicas do governo.

## Instalação

1. Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em [nodejs.org](https://nodejs.org/).

2.  Inicialize um projeto Node.js:

    ```bash
    npm init -y
    ```

3. Instale as dependências do projeto usando npm:

    - Para instalar o Axios, execute o seguinte comando:

        ```bash
        npm install axios
        ```

    - Para instalar o Cheerio, execute o seguinte comando:

        ```bash
        npm install cheerio
        ```

     - Ou você pode fazer a intalção de ambos:

        ```bash
        npm install cheerio axios
        ```

4. Após a instalação, você pode executar o script principal:

    ```bash
    node index.js
    ```

    O script irá acessar a página https://www.ibge.gov.br/cidades-e-estados/rs/alpestre.html, extrair as informações desejadas e exibi-las no console.

## Contribuições

Sinta-se à vontade para contribuir com melhorias ou correções neste projeto. Abra uma issue para discutir mudanças propostas ou envie uma pull request.

## Licença

Se chegou até aqui, agradeço pelo apoio à minha evolução.
