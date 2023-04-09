const r1 = require ('readline').createInterface (process.stdin, process.stdout);

let n = Math.floor(Math.random() * 1000);
console.log ('загадано число',n);
let counter = 0;
(async function question() => {
    const data = await r1.question('Enter command: ', (cmd) => {
        console.log('You entered: ', cmd);
        if (cmd == 'q') {
            r1.close();
            return;
        }
        counter++;
        if (cmd == n) {
            r1.close();
            return console.log(`Вы угадали, ${counter} попыток`);
        } else if (cmd < n) {
            console.log(`больше ${counter} попыток`);
        } else console.log(`меньше ${counter} попыток`);
        question();
    })
})

question();