function solution(my_string, alp) {
    return my_string.split('').map((text) => text === alp ? alp.toUpperCase(): text).join('')
}