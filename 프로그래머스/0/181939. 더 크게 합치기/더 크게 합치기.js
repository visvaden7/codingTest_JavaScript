function solution(a, b) {
    answerAB = `${a}${b}`
    answerBA = `${b}${a}`
    return answerAB > answerBA
        ? parseInt(answerAB)
        : parseInt(answerBA)
}