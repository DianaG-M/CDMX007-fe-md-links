const fileSystem = require ('fs');
const path = require ('path');
const linkForGetLink = require('./getLink');
const pathA = path.resolve(process.argv[2]); 
require ('colors');
const options = process.argv[3];

const findLink = () => {
    fileSystem.readdir(pathA, (err, data) => {
        console.log(`${'ruta'}${pathA}`.yellow);
        if(err){
            console.log(err);
        } else {
            data.forEach(element => {
                if(path.extname(element) === '.md'){
                    fileSystem.readFile(element, 'utf-8', (err, data) => {
                        if(err){
                            console.log(err);
                        }else if (options == '--validate'){
                            linkForGetLink.getLink(data);
                        }else if (options == '--stats'){
                            linkForGetLink.stats(data);
                        }
                    })
                }
            })
        }
    })
}

module.exports =  findLink;