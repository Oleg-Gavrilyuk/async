const rl = require ('readline').createInterface (process.stdin, process.stdout);

let n = Math.floor(Math.random() * 1000);
console.log ('загадано число',n);
let counter = 0;

const question = (quest) => {
    return new Promise ((resolve, reject) => {
        rl.question(quest, (cmd) => {
            resolve(cmd);
        })      
    })
}

async function input () {
    while (true) {
        const cmd = await question ('Введите число: ');
        console.log('Вы ввели ', cmd)
        if (cmd == 'q') {
            rl.close();
            break;
        }
        counter++;
        if (cmd == n) {
            console.log(`Вы угадали, ${counter} попыток`);
            rl.close();
            break
        } else if (cmd < n) {
            console.log(`больше ${counter} попыток`);
        } else console.log(`меньше ${counter} попыток`);
    }
    
}

input();
