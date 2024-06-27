function solution(my_string, index_list) {
    let returnArray = ""
    index_list.forEach(it => returnArray += my_string[it])
    return returnArray
}