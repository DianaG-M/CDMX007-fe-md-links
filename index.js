//module.exports = () => {
  const FileSystem = require ('fs');
  
  FileSystem.readFile('./prueba_libreria/prueba.md', (err,data) => {
      if(err){
          console.log(err);
      } else {
          console.log(data.toString());
      }
  })
//};
