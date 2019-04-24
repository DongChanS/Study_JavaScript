
/*
blocking
: 한 줄이 끝나기전까지는 그다음 줄이 실행되지 않도록 막음.

non-blocking
    - setTimeout가 실행되는데, blocking을 하지 않고
        함수가 리턴됨
    - 그래서 console.log("쉬는시간 다됨")이 실행됨

    - setTimeout가 실행된지 10초가 지나면 console.log("쉬는 시간이에용")이 출력됨.

모든 자바스크립트 함수가 non-blocking인건 아님.
    - 자바스크립트 : non-blocking io
    - 시간이 길게 소요되는 input out관련 operation들은 non-blocking이다.

왜 이걸 쓰는가?
    - Date.now()를 이용해서 무식하게 동기적인 함수를 만들어보겠다.
    - Date.now() : 유닉스 표준시간 (1970년 1월 1일)부터 시간을 계산한것.
    -> 브라우저가 기다리는동안 완전히 다른 행동을 하지 못함.

    - 다른 환경과는 달리 브라우저는 이런 것이 매우 취약하기 때문에, non-blocking operation을 만든것.

어자피 브라우저는 쓰레드가 하나밖에 없기 때문에,
길게 걸리는 명령이 들어온다면 이게 끝날때까지 blocking하는게 아니라,
어딘가에 긴 명령을 넣어서 따로 실행하고, 뒤의 명령을 또 실행하는것.

이거랑 유사한 용어가 asynchronous 라고 있는데 non-blocking과는 약간 다름.

synchronous : 순서대로
자바스크립트는 기본적으로 순서대로 돌아가지만,
non-blocking 함수가 작동할때만 asynchronous하게 됨.
대표적으로 fetch도 논블로킹이다.

event loop : https://meetup.toast.com/posts/89

자바스크립트가 single thread인게 굉장한 장점임.

*/

function sleep(sec) {
    const future = Date.now() + sec * 1000
    while (Date.now() < future) {}
    console.log("두번째")
}


const timeout = () => {
    setTimeout(() => {
        console.log("두번째")
    }, 3 * 1000)
}

console.log("첫번째")
timeout()
console.log("세번째")