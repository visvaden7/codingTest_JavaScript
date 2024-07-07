function solution(a, b) {
    let answerAB = `${a}${b}`
    let answerBA = `${b}${a}`
    return parseInt(answerAB > answerBA
        ? answerAB
        : answerBA)
}