function solution(str1, str2) {
    return [...str1].reduce((result, _, idx) => `${result}${str1[idx]}${str2[idx]}`, "");
}