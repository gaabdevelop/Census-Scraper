// Importa as bibliotecas necessárias: axios para fazer requisições HTTP e cheerio para manipulação de HTML
const axios = require('axios');
const cheerio = require('cheerio');

// Função assíncrona chamada 'fetchData', que faz uma requisição HTTP para a URL fornecida
const fetchData = async (url) => {
    // Faz a requisição usando axios e retorna os dados da resposta
    const result = await axios.get(url);
    return result.data;
};

// Função assíncrona principal chamada 'main', que executa o código principal
const main = async () => {
    // Obtém o conteúdo da página web fazendo uma requisição HTTP
    const content = await fetchData("https://www.ibge.gov.br/cidades-e-estados/rs/alpestre.html");

    // Carrega o conteúdo HTML da página usando cheerio
    const $ = cheerio.load(content);

    // Inicializa um array vazio chamado 'info' para armazenar informações extraídas da página
    let info = [];

    // Para cada elemento dentro do seletor '.resultados-padrao > li' (lista de resultados na página)
    $('.resultados-padrao > li').each((index, element) => {
        // Obtém o texto do elemento atual e adiciona ao array 'info' como um array
        const dadods = $(element).text();
        info.push([dadods]);
    });

    // Imprime o array 'info', que agora contém as informações extraídas
    console.log(info);
};

// Chama a função 'main' para iniciar a execução do código
main();
