function solution(my_string, overwrite_string, s) {
    let temp = my_string.slice(0,s)
    temp += overwrite_string
    if(my_string.length - s > overwrite_string.length){
        temp +=my_string.slice(overwrite_string.length + s, my_string.length)
    }
    return temp
}
