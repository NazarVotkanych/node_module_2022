// const { greeting } = require('./lesson1/helper');
//
// greeting('Nazar');

const path = require('path');

const fs = require('fs').promises;

// fs.mkdir(path.join(__dirname, 'main', 'online', 'txt'), {recursive: true}, err => {
//     if (err) {
//         console.log(err)
//     }
// })

// let users = [
//     {name: "Andrii", age: 22, city: "Lviv"},
//     {name: "Anna", age: 25, city: "Kyiv"},
//     {name: "Oleg", age: 22, city: "Lviv"},
//     {name: "Max", age: 22, city: "Kyiv"},
//     {name: "Tamara", age: 22, city: "Kyiv"},
// ]
//
//
// const foo = async () => {
//    await fs.mkdir(path.join(__dirname, 'main', 'inPerson'), {recursive: true});
//
//     users.map(user => {
//         fs.writeFile(path.join(__dirname, 'main', 'inPerson', `${user.name}.txt`),`${(user.name)}\n${(user.age)}\n${(user.city)}\n`);
//     });
//
// }
// foo()
//
//
// let persons = [
//     {name: 'Nazar', age: 21, city: "Kyiv"},
//     {name: 'Max', age: 25, city: "Kyiv"},
//     {name: "Oleg", age: 22, city: "Lviv"},
// ]
//
// const fooo = async () => {
//     await fs.mkdir(path.join(__dirname, 'main', 'online'), {recursive: true});
//
//     persons.map(person => {
//         fs.writeFile(path.join(__dirname, 'main', 'online', `${person.name}.txt`),`${(person.name)}\n${(person.age)}\n${(person.city)}\n`);
//     });
//
// }
// fooo()


// const change = async (readDir, moveTo) => {
//     const data = await fs.readdir(path.join(__dirname, 'main', readDir));
//
//     await Promise.all(data.map(async fileName => {
//             if (!fileName.includes('new_')) {
//                 await fs.rename(path.join(__dirname, 'main', readDir, fileName), path.join(__dirname, 'main', moveTo, `new_${fileName}`));
//             }
//         })
//     );
// }
//
// change('inPerson', 'online');
// change('online', 'inPerson');


// const change2 = async () => {
//     const data = await fs.readdir(path.join(__dirname, 'main', 'online'));
//
//     await Promise.all(data.map(async fileName => {
//         if (!fileName.includes('new_')) {
//             await fs.rename(path.join(__dirname, 'main', 'online', fileName), path.join(__dirname, 'main', 'inPerson', `new_${fileName}`));
//         }
//     }))
// }
// change2()


// HW2

