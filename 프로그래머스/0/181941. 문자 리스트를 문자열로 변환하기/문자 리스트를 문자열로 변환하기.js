function solution(arr) {
    return arr.reduce((result,char) => `${result}${char}`,"")
}