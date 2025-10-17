function solution(num_list) {
    const tempArr = [...num_list];
    const [prevNum, lastNum] = tempArr.slice(-2)
    console.log(tempArr, prevNum, lastNum)
    let addNum = prevNum >= lastNum ? lastNum*2 : lastNum - prevNum
    return [...tempArr,addNum];
}