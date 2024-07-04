function solution(my_string, overwrite_string, s) {
    let temp =  ''
    for(let i = 0; i < my_string.length; i++){
        i >= s && i < overwrite_string.length + s 
            ? temp += overwrite_string[i-s] 
            : temp += my_string[i]
    }
    return temp
}
