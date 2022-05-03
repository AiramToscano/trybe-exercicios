const fs = require('fs').promises;

// 5.1
// const simpsons = 'simpsons.json';
// const simpsonsFamily = 'simpsonsFamily.json';
// const vet = [simpsons,  simpsonsFamily];
// async function mainfast () {
// const teste = await Promise.all(vet)
// teste.forEach((e) => {
//     const data = fs.readFile(e, 'utf8').then((data) => {
//         const simpsonsTrue = JSON.parse(data);
//         simpsonsTrue.map((dados) => console.log(dados))
//         //    console.log(simpsonsTrue);
//         }).catch((err) => { console.log(err)})
// })
// }
// mainfast();
// 5.2
// const string = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
// async function promiseAll () {
// const vetstring = await Promise.all(string);
// vetstring.forEach((e,index) => {
//     fs.writeFile(`file${index}.txt`, JSON.stringify(e))
// })
// }
// promiseAll();

const text0 = 'file0.txt';
const text1 = 'file1.txt';
const text2 = 'file2.txt';
const text3 = 'file3.txt';
const text4 = 'file4.txt';
const vet = [text0,  text1, text2 , text3 ,text4 ];

async function lectureText () {
const teste = await Promise.all(
    vet.map((filename) => fs.readFile(filename, 'utf-8')))
const escrita = teste.join(' ').replace(/[\\"]/g, '');
console.log(escrita);
await fs.writeFile('./fileAll.txt', escrita);
}

lectureText()

