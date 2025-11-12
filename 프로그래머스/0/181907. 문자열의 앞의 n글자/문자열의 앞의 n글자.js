// function solution(my_string, n) {
//     const answer = []
//     for(let i = 0; i < n ; i++){
//         answer.push(my_string[i])
//     }
//     return answer.join(''))
// }

function solution(my_string, n) {
    return my_string.slice(0, n)
}

// function solution(my_string, n) {
//     return Array.from(my_string).reduce((acc, curr, i) => {
//        return i < n ? acc + curr : acc 
//     },'')
// }