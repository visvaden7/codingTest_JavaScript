const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input[0];
    const code = (char) =>  char.charCodeAt()
    const alphabetDiff = code('a') - code('A')
    const result = [...str].map(char => {
        return char.charCodeAt() >= code('a')
            ? String.fromCharCode(code(char) - alphabetDiff)
            : String.fromCharCode(code(char) + alphabetDiff)
    }).join('')
    console.log(result)
})