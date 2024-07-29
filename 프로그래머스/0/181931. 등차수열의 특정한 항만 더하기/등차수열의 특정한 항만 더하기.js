function solution(a, d, included) {
    var answer = 0;
    let tmp = a
    included.forEach((element) => {
        if(element){
            answer += tmp
        }
        tmp += d
    })
    return answer;
}