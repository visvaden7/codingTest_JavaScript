function solution(babbling) {
    let answer = 0;
    let babblingCheckList = ["aya","ye","woo","ma"];
    let tempList = []
    for(let i = 0; i < babbling.length; i++){
        let temp = babbling[i]
        for(let j = 0; j < babblingCheckList.length; j++){
            if(temp.includes(babblingCheckList[j])){
                tempList = [...tempList, j]
            }
        }
        console.log(i, tempList)
        for(let j= 0; j < babblingCheckList.length; j++){
            temp = temp.replace(babblingCheckList[tempList[j]],"")
            if(temp.length === 0){
                answer++
                break;
            }
        }
        tempList = []
    }
    return answer;
}