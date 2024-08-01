function solution(num_list) {
    const {odd, even} = num_list.reduce(({odd, even},num) => {
        num%2 ? odd += num : even += num
        return {odd, even}
    },{odd: "", even: ""})
    return +odd + +even;
}