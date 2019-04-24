/*


non-block이라는 기능때문에

원래 프로그램을 짜면 위에서부터 쭉 밑으로 내려가면 되는데,

자바스크립트는 순서대로 되지 않아도 고통스러움.


fetch(URL) : promise 라는 이상한 객체가 나옴. => 이걸 저장해봤자 의미없음

=> 아직 기다리고 있다는 뜻임.

=> fetch(URL).then(function(response){
    console.log(response)
})

then이 무엇인가? => 다음에 일어날 일을 강제함.
(이런 async한 형태의 코드를 조금 더 눈에 보이게끔 만들고 싶어서 그런거임.

    call-back으로 하게되면 그게 눈에 잘 안들어오고,
    여러개의 단계적인 명령을 제어하기 힘들기 때문임.
    
    )

response : 어쨌든 성공한 다음에 response가 들어있고, 그걸 다뤄주면 됨.


async가 너무 불편해서 promise가 생겼고 이걸 이런식으로 짤 수 있다.
-> 이걸 async-await라는 것으로 핸들링할수있다.


*/
const URL = "https://jsonplaceholder.typicode.com/posts/"

const res = fetch(URL).then(function(response){
    // console.log(response)
    // console.log(response.body) // ReadableStream => 안에는 body 텍스트 내용이 들어가있음.
    // console.log(response.json())
    return response.json()
})

res.then(function(obj){
    console.log(obj)
})

// 받은거 다시 then으로 출력해줘야함.

