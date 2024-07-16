function solution(ineq, eq, n, m) {
    const operator = `${ineq}${eq}`
    let result = 0
    switch(operator){
            case ">=":
                result = n >= m
                break;
            case "<=":
                result =  n <= m
                break;
            case "<!":
                result =  n < m
                break;
            case ">!":
                result =  n > m
                break;
    }
    var answer = result ? 1 : 0;
    return answer;
}