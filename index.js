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


const lerArquivo = (file) => new Promise((resolve, reject)=> 
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

/*
//Forma 1 de gerenciar uma promise asyncrona
lerArquivo('./arquivo.txt').then(resultado =>
{
    console.log(String(resultado));
    return lerArquivo('./arquivo2.txt');
})
.then(resultado => 
{
    console.log(String(resultado));
})
.finally(() => 
{
    console.log("Promisse executada por completo");
});
*/

console.log(2);
console.log(3);
console.log(4);

setTimeout(() => console.log("Timeout concluido"), 1000);

//async/await é uma forma mais simples de identificar uma promisse  - Descomente um bloco de cada vez


//Forma 2 de gerenciar uma promise asyncrona
const funcaoTeste = async () => {
    const resultado = await lerArquivo('./arquivo.txt');
    console.log(String(resultado));
}

console.log('Retorno: ',funcaoTeste()); //Uma função async é uma promise

console.log(2);
console.log(3);
console.log(4);