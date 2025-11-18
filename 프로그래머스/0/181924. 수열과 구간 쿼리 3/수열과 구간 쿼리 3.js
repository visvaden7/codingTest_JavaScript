function solution(arr, queries) {
    // let answer = queries.map((query) => {
    //     let temp = arr[query[0]]
    //     arr[query[0]] = arr[query[1]]
    //     arr[query[1]] = temp
    // })
    let answer = arr.slice()
    queries.forEach(([i,j]) => {
        [answer[i], answer[j]] = [answer[j], answer[i]]
    })
    return answer;
}