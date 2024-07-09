function solution(a, b) {
    const twiceAB = 2*a*b
    const AB = Number(`${a}${b}`)
    return twiceAB > AB ? twiceAB : AB
}