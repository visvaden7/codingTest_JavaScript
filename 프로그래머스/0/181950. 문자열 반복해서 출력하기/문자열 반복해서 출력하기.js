const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', (line) => {
    const [str, n]= line.split(' ');
    let output="";
    for(let i = 0; i < n; i++) output += str
    console.log(output)
});