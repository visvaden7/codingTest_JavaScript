function solution(numLog) {
    const numLogMap = {1:'w','-1':'s',10:'d','-10':'a'}
    return numLog.reduce((acc, curr, i, arr) => {
        return i === 0 ? acc : acc + numLogMap[curr - arr[i-1]]
    },[])
}