// Importa a biblioteca Axios para realizar requisições HTTP
const axios = require('axios');

// Importa a biblioteca Cheerio para fazer scraping (análise de HTML) de páginas web
const cheerio = require('cheerio');

// Define uma função assíncrona chamada 'fetchData', que recebe uma URL como parâmetro
const fetchData = async (url) => {
    // Realiza uma requisição HTTP GET à URL fornecida usando Axios e aguarda a resposta
    const result = await axios.get(url);

    // Retorna os dados da resposta
    return result.data;
};

// Define uma função assíncrona chamada 'main'
const main = async () => {
    // Chama a função 'fetchData' para obter o conteúdo HTML da página desejada
    const content = await fetchData("https://www.ibge.gov.br/cidades-e-estados/rs/alpestre.html");

    // Carrega o conteúdo HTML em uma instância Cheerio para facilitar a manipulação
    const $ = cheerio.load(content);

    // Inicializa um array vazio chamado 'info' para armazenar as informações extraídas
    let info = [];

    // Extrai informações desejadas da página usando seletores Cheerio
    const prefeito = $('.resultados-destaque li:contains("Prefeito") .ind-value').text().trim();
    const areaTerritorial = $('.resultados-padrao li:contains("Área Territorial") .ind-value').text().trim();
    const populacaoResidente = $('.resultados-padrao li:contains("População residente") .ind-value').text().trim();
    const densidadeDemografica = $('.resultados-padrao li:contains("Densidade demográfica") .ind-value').text().trim();
    const escolarizacao = $('.resultados-padrao li:contains("Escolarização 6 a 14 anos") .ind-value').text().trim();
    const idhm = $('.resultados-padrao li:contains("IDHM") .ind-value').text().trim();
    const mortalidadeInfantil = $('.resultados-padrao li:contains("Mortalidade infantil") .ind-value').text().trim();
    const receitasRealizadas = $('.resultados-padrao li:contains("Receitas realizadas") .ind-value').text().trim();
    const despesasEmpenhadas = $('.resultados-padrao li:contains("Despesas empenhadas") .ind-value').text().trim();
    const pibPerCapita = $('.resultados-padrao li:contains("PIB per capita") .ind-value').text().trim();

    // Organiza as informações extraídas em um array chamado 'data'
    const data = [prefeito, areaTerritorial, populacaoResidente, densidadeDemografica, escolarizacao, idhm, mortalidadeInfantil, receitasRealizadas, despesasEmpenhadas, pibPerCapita]

    // Adiciona o array 'data' ao array 'info'
    info.push(data);

    // Imprime o array 'info' no console
    console.log(info);
};

// Chama a função 'main' para iniciar a execução do script
main();
