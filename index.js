const app = require('./src/app');
const figlet = require('figlet');
const info = require('./src/utils/info');

figlet.text('Neobot', {
    font: 'ANSI Shadow',
}, function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data);
    console.log(`${info}\n`);
});

// loader
const P = ['\\', '|', '/', '-'];
let x = 0;
const loader = setInterval(() => {
    process.stdout.write(`\r${P[x++]}`);
    x %= P.length;
}, 250);

setTimeout(() => {
    clearInterval(loader);
    console.clear();
    app();
}, 2000);
