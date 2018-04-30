'use strict';
const readline = require('readline');

const interview = () => {
    let generatorSheet = gen();

    function* gen() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        let sheet = {};

        yield rl.question('enter your name:', (answer) => {
            sheet.name = answer;  
            generatorSheet.next();
        });

        yield rl.question('enter your surname:', (answer) => {
            sheet.surname = answer;  
            generatorSheet.next();
        });

        yield rl.question('enter your age:', (answer) => {
            sheet.age = answer;  
            rl.close();
            generatorSheet.next();
        });

        return console.log('sheet', sheet);;
    }

    return generatorSheet.next();
}

interview();
