const arquivo = require('fs');

//callbacks - Descomente somente 1 bloco de codigo por vez
/*
const arquivo = require('fs');
console.log(1);

function myCallback(erro, conteudo) {
    console.log(erro);
    console.log(String(conteudo));
}

const myCallback1 = (erro, conteudo) => 
{
    console.log(erro);
    console.log(String(conteudo));
};

arquivo.readFile('./arquivo.txt', myCallback);
arquivo.readFile('./arquivo.txt', myCallback1);
arquivo.readFile('./arquivo.txt', (erro, conteudo) => 
{
    console.log(erro);
    console.log(String(conteudo));
});

console.log(2);
console.log(3);
console.log(4);
*/


//Promisses (Similar a Tasks) - Descomente um bloco de cada vez
const lerArquivo = file => new Promise((resolve, reject)=> 
{
    arquivo.readFile(file, (erro, resultado) => 
    {
        if (erro){
            reject(erro);
        }
        else{
            resolve(resultado);
        }
    });
});

lerArquivo('./arquivo.txt').then(resultado =>
{
    console.log(String(resultado));
    return lerArquivo('./arquivo2.txt');
})
.then(resultado => 
{
    console.log(String(resultado));
});
