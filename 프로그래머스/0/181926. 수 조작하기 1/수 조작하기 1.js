function solution(n, control) {
    let answer = [...control];
    let count = n
    // answer.forEach((el) => {
    //     switch(el){
    //         case 'w':
    //             return count+=1;
    //             break;
    //         case 's':
    //             return count-=1;
    //             break;
    //         case 'd':
    //             return count+=10;
    //             break;
    //         case 'a':
    //             return count-=10;
    //             break;
    //     }
    // })
    count = answer.reduce((acc, curr) => {
        if(curr === 'w'){
            return acc + 1;    
        } else if (curr === 's'){
            return acc - 1;
        } else if (curr === 'd'){
            return acc + 10;
        } else if (curr === 'a'){
            return acc - 10
        } 
    },count)
    console.log(count)
    return count;
}