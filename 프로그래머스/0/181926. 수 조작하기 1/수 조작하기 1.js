/**
 * ✅ 문제 설명
 * 주어진 정수 n에서, 문자열 control에 포함된 문자에 따라 값을 조정하는 함수.
 * 
 * 'w' → +1
 * 's' → -1
 * 'd' → +10
 * 'a' → -10
 * 
 * control 문자열의 각 문자를 순서대로 처리하여 최종 결과값을 반환.
 *
 * ✅ Time Complexity: O(n)
 *    - n은 control 문자열의 길이입니다.
 *    - reduce()가 문자열 전체를 한 번 순회하므로 선형 시간.
 *
 * ✅ Space Complexity: O(n)
 *    - 스프레드 연산자([...control])로 문자열을 문자 배열로 복사하므로 O(n) 공간 사용.
 *    - 나머지는 상수 공간.
 *
 * ✅ 설계 포인트
 * 1️⃣ 객체(operation map)를 통해 문자별 연산을 매핑하여 if/switch 분기를 제거.
 * 2️⃣ reduce()를 이용해 누적 결과를 함수형 스타일로 계산.
 * 3️⃣ 함수형 접근으로 가독성과 유지보수성을 높임.
 */

function solution(n, control) {
    let answer = [...control];
    let count = n
    // for문을 이용한 switch문으로 조건조절
    // answer.forEach((el) => {
    //     switch(el){
    //         case 'w':
    //             return count+=1;
    //             break;
    //         case 's':
    //             return count-=1;
    //             break;
    //         case 'd':
    //             return count+=10;
    //             break;
    //         case 'a':
    //             return count-=10;
    //             break;
    //     }
    // })
    const operation = {
        w: (n) => n + 1,
        s: (n) => n - 1,
        d: (n) => n + 10,
        a: (n) => n - 10
    }
    return answer.reduce((acc, curr) => {
        return operation[curr](acc) 
    },count)
}