const fetch = require ('node-fetch');

const mdLinks = (data) => {
    const regularExp = /(https?:\/\/[^\)\s]+)/g;
    arrLink = data.match(regularExp);
    console.log(arrLink);

}



module.exports.mdLinks = mdLinks;   