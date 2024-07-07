function solution(arr) {
    const result = arr.reduce((result,char) => `${result}${char}`,"")
    return result
}