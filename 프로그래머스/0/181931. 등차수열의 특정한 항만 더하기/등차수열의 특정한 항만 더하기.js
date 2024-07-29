function solution(a, d, included) {
    return included.reduce((answer, flag, idx) => {
        return flag ? answer + a + d * idx : answer
    },0)
}