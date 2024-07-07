function solution(a, b) {
    let answerAB = `${a}${b}`
    let answerBA = `${b}${a}`
    return parseInt(answerAB) > parseInt(answerBA)
        ? parseInt(answerAB)
        : parseInt(answerBA)
}