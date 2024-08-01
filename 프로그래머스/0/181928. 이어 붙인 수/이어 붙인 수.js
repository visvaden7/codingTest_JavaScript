function solution(num_list) {
    let odd = ""
    let even = ""
    num_list.forEach((num) => {
        if(num % 2) {
            odd += num
        }else {
            even += num
        }
    })
    return +odd + +even;
}