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

    $('.resultados-padrao > li').each((index, element) => {
        const dados = $(element).text();
        info.push([dados]);
    });

    console.log(info);
};

main();
