const fileSystem = require ('fs');
const path = require ('path');
const linkForMD = require('./md-links');

const findLink = () => {
    fileSystem.readdir('./', (err, data) => {
        if(err){
            console.log(err);
        } else {
            data.forEach(element => {
                if(path.extname(element) === '.md'){
                    fileSystem.readFile(element, 'utf-8', (err, data) => {
                        if(err){
                            console.log(err);
                        }else {
                            linkForMD.mdLinks(data);
                        }
                    })
                }
            })
        }
    })
}

module.exports =  findLink;