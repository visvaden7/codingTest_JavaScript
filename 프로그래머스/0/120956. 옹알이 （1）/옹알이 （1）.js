function solution(babbling) {
    let answer = 0;
    let babblingCheckList = ["aya","ye","woo","ma"];
    babbling.forEach((oneOfBabbling)=> {
        babblingCheckList
        .filter(item => oneOfBabbling.includes(item))
        .forEach(filteredBabbling => {
            oneOfBabbling = oneOfBabbling.replace(filteredBabbling,"")
            oneOfBabbling.length === 0 ? answer++ : answer;
        })
    })
    return answer;
}