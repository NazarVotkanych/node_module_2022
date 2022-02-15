// const { greeting } = require('./lesson1/helper');
//
// greeting('Nazar');

// Task1


const path = require('path');
const fs = require('fs').promises;

// fs.mkdir(path.join(__dirname, 'main', 'txt3'), {recursive: true});


// const hell = async () => {
//     await fs.mkdir(path.join(__dirname, 'main', 'txt'), {recursive: true});
//
//     const data = await fs.readdir(path.join(__dirname, 'main', 'txt'));
//
//     await Promise.all(data.map(async fileName => {
//         await fs.rename(path.join(__dirname, 'main', 'txt', fileName), path.join(__dirname, 'main', 'txt3', fileName));
//     }));
//
// }
//
// hell();

// Task2
// fs.mkdir(path.join(__dirname, 'main2', 'txt2'), {recursive: true});

// const hello = async () => {
//     await fs.mkdir(path.join(__dirname, 'main2', 'txt'), {recursive: true});
//
//     const pathQ = path.join(__dirname,'main2', 'txt2', 'ooo.txt');
//
//     await fs.appendFile(pathQ, 'Hello World', {flag: 'w'});
//     const data = await fs.readFile(pathQ, 'utf-8');
//
//     await fs.writeFile(path.join(__dirname, 'main2', 'txt' , 'test.txt'), data);
//
//     await fs.unlink(path.join(__dirname, 'main2', 'txt', 'test.txt'));
//     await fs.rmdir(path.join(__dirname, 'main2', 'txt'));
//
// }
// hello();


// Task3
fs.mkdir(path.join(__dirname, 'main3', 'txt2'), {recursive: true});

let users = [
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Anna", age: 25, city: "Kyiv"},
    {name: "Oleg", age: 22, city: "Lviv"},
    {name: "Max", age: 22, city: "Kyiv"},
    {name: "Tamara", age: 22, city: "Kyiv"},
]

const helloWorld = async () => {
    await fs.mkdir(path.join(__dirname, 'main3', 'txt1'), {recursive: true});

    const foo = async () => {
        await fs.mkdir(path.join(__dirname, 'main3', 'txt1'), {recursive: true});

        users.map(user => {
            fs.writeFile(path.join(__dirname, 'main3', 'txt1', `${user.name}.txt`), `${(user.name)}\n${(user.age)}\n${(user.city)}\n`);
        });

        const readDir = await fs.readdir(path.join(__dirname, 'main3', 'txt1'));

        await Promise.all(readDir.map(async fileName => {
            const a = await fs.stat(path.join(__dirname, 'main3', 'txt1', fileName));
            if (a.isFile()) {
                await fs.truncate(path.join(__dirname, 'main3', 'txt1', fileName))
            }
        }))
        const readDir2 = await fs.readdir(path.join(__dirname, 'main3', 'txt2'));

        await Promise.all(readDir2.map(async dirName => {
            const a = await fs.stat(path.join(__dirname, 'main3', 'txt2', dirName));
            if (a.isDirectory()) {
                await fs.rename(path.join(__dirname, 'main3', 'txt2', dirName), path.join(__dirname, 'main3', 'txt2', `new_${dirName}`));
            }
        }))

    }
    foo()

}
helloWorld()




