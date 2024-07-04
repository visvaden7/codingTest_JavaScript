function solution(str1, str2) {
    let strlength = str1.length
    let sumString = ''
    for(let i = 0; i < strlength; i++ ){
        sumString += str1[i]+str2[i]
    }
    return sumString;
}