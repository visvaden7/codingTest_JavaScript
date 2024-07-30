function solution(num_list) {
    const multipleSum = num_list.reduce((sum, val) => sum * val)
    const addSumSquare = num_list.reduce((sum, val) => sum + val) ** 2
    return multipleSum > addSumSquare ? 0 : 1
}
