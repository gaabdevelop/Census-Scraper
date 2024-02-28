const axios = require('axios');
const cheerio = require('cheerio');

const fetchData = async (url) => {
    const result = await axios.get(url);
    return result.data;
};

const main = async () => {
    const content = await fetchData("https://www.ibge.gov.br/cidades-e-estados/rs/alpestre.html");
    const $ = cheerio.load(content);
    let info = [];

    // Extrair informações desejadas
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

    const data = [prefeito, areaTerritorial, populacaoResidente, densidadeDemografica, escolarizacao, idhm, mortalidadeInfantil, receitasRealizadas, despesasEmpenhadas, pibPerCapita ]
    info.push(data);

    console.log(info);
};

main();
