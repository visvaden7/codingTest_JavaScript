function solution(num_list, n) {
    // const answer = []
    // num_list.reduce((acc, curr, i) => {
    //     if(i%n === 0) return answer.push(curr)
    // },[])
    // return answer
    
    return num_list.filter((item, idx) => {
        if(idx % n === 0) return item
    });
}