function solution(my_string, overwrite_string, s) {
    let result = ''
    for(let i = 0; i < s; i++) {
        result += my_string[i]
    }
    result += overwrite_string
    for(let j = overwrite_string.length + s; j < my_string.length; j++ ){
        result += my_string[j]
    }
    return result
}
