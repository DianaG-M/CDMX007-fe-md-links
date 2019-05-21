const fetch = require('node-fetch');
const path = require('path');
const color = require('colors');

const getLink = (data) => {
  const regularExp = /(https?:\/\/[^\)\s]+)/g;
  const arrLink = data.match(regularExp);
  //console.log(arrLink);

  if (arrLink !== null) {
    arrLink.forEach(element => {
      const route = path.parse(element);
      // console.log('route', route);
      const linkName = route.name;
      fetch(element).then(res => {
        const linkStatus = res.status
        //console.log(linkStatus)
        if (linkStatus === 200) {
          console.log(`${color.bgWhite.black(linkName)}\n${color.rainbow(element)}\n${color.green(linkStatus)} ${color.green('OK')}\n`);
        } else /* if (linkStatus === 404) */{
          console.log(`${color.bgCyan.black(linkName)}\n${color.rainbow(element)}\n${color.red(linkStatus)} ${color.red('FAIL')}\n`);
        }
      })
    })
  }

  /* for(let i = 0; i < arrLink.lenght; i++){

    for(let j = 0; j; j++){}
  } */
};

module.exports.getLink = getLink;