function solution(my_string, k) {
    return Array.from({length:k}).reduce((result, _,idx)=>`${result}${my_string}`,"")
    // let result = ''
    // for(let i =0; i < k; i++){
    //     result += my_string
    // }
    // return result
}