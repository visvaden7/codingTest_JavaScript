const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    let sumstring = ''
    for(let i = 0; i < str.length;i++){
        str[i] === str[i].toUpperCase() 
            ? (sumstring += str[i].toLowerCase()) 
            : (sumstring += str[i].toUpperCase())
    }
    console.log(sumstring)
    
});