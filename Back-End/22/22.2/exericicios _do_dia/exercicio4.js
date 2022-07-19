const fs = require('fs').promises;

const simpsons = 'simpsons.json';
//  4.1
// fs.readFile(simpsons, 'utf8').then((data) => {
//     const simpsonsTrue = JSON.parse(data);
//     simpsonsTrue.map((e) => console.log(`${e.id} - ${e.name}`));
// //    console.log(simpsonsTrue);
// }).catch((err) => { console.log(err)})

// 4.2
// const searchSimpsons = (id) => {
//       const data1 =  fs.readFile(simpsons, 'utf8').then((data) => {
//         const simpsonsTrue = JSON.parse(data);
//        return simpsonsTrue.find((e) => Number(e.id) === id)
//         // console.log(search);
//     })
//     return new Promise((resolve, reject) => {
//         if(id === 0 || id > 10) return reject(new Error('id não encontrado'))
//         resolve(data1);
//     })
//     }

// 4.3
    // const filterSimpsons = () => {
    //     const data1 =  fs.readFile(simpsons, 'utf8').then((data) => {
    //       const simpsonsTrue = JSON.parse(data);
    //      return simpsonsTrue.filter((e) => Number(e.id) !== 6 && Number(e.id) !== 10 )
    //       // console.log(search);
    //   })
    //   return new Promise((resolve, reject) => {
    //       resolve(data1);
    //   })
    //   }
//  const resolve =  async () => {
//    const newJson =  await filterSimpsons().then(result => result)
//    .catch(err => console.log(`erro: ${err.message}`));
//    const simpsonsString = JSON.stringify(newJson)
// fs.writeFile(simpsons, simpsonsString)

// }

// 4.4
  const simpsons4_4 = () => {
        const data1 =  fs.readFile(simpsons, 'utf8').then((data) => {
          const simpsonsTrue = JSON.parse(data);
         return  simpsonsTrue.map((e) => e);
          // console.log(search);
      })
      return new Promise((resolve, reject) => {
          resolve(data1);
      })
      }
const resolve =  async () => {
    const newJson =  await simpsons4_4().then(result => result)
    .catch(err => console.log(`erro: ${err.message}`));

const Filter = newJson.filter((e) => e.id  < 5);
const objNelson = {
    id: '5',
    name: 'Nelson Muntz'
}
Filter.push(objNelson);
const simpsonsString = JSON.stringify(Filter)
// simpsonsString.replace("Nelson Muntz","Lisa Simpson")
const newString = simpsonsString.replace("Nelson Muntz","Maggie Simpson")
 const simpsonsFamily = 'simpsonsFamily.json';
 fs.writeFile(simpsonsFamily, newString)
 }
resolve()