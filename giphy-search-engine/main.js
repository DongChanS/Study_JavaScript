// 1. 인풋 안의 값을 잡는다.
const input = document.querySelector('#js-userinput');
const button = document.querySelector('#js-go');
const resultArea = document.querySelector('#result-area');
// 1-1. input 태그에서 엔터를 누를 때 or 버튼을 누를 때
// 인풋에 기록된 값을 가져다가 제출하는게 목적이다!
input.addEventListener('keypress', event => {
    if (event.keyCode === 13){
        // 일단 인풋의 value를 꺼내자.
        const value = input.value // attribute로 value를 갖고 있으니까!
        keywordSearch(value)
    }
})

button.addEventListener('click', event => {
    const value = input.value 
    keywordSearch(value)
})


// 2. Giphy API를 통해 데이터를 받아서 가공한다.
const apiKey = 'LoJKuepYxv4o0GJYilCyXMgRlFA3Oh0D'

const keywordSearch = function(keyWord) {
    const XHR = new XMLHttpRequest()
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyWord}`
    XHR.open('GET', URL)
    XHR.send()
    XHR.addEventListener('load', function(event){
        const rawData = event.target.response
        const jsonData = JSON.parse(rawData)
        while (resultArea.firstChild) {
            resultArea.removeChild(resultArea.firstChild)
        }
        jsonData.data.forEach((data) => {
            pushToDom(data.images.fixed_height.url)
        })        
    })
}

// 3. gif 파일들을 HTML(DOM) 에 밀어넣는다.
// resultArea 안에 받은 데이터를 넣을거임.
const pushToDom = (data) => {
    let node = document.createElement('img')
    node.src = data
    resultArea.appendChild(node)
    // 레퍼런스 타입이기 때문에 const여도 상관없다는말인데..
    // resultArea.insertBefore(node, resultArea.firstChild) 와 같이 작성하면,
    // 앞쪽에 img태그를 넣을 수 있다.
}


// 추가

/* 특정 키워드로 검색한 gif 결과들이 계속해서 바뀌면서 출력해주는거 어떤가? */

// 1. 트렌딩 이미지를 저장한다.
let trendImage = []

const getTrendImages = function(){
    const XHR = new XMLHttpRequest()
    const URL = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`
    XHR.open('GET', URL)
    XHR.send()
    XHR.addEventListener('load', function(event){
        const rawData = event.target.response
        const jsonData = JSON.parse(rawData)
        console.log(jsonData)
        jsonData.data.forEach((data) => {
            trendImage.push(data.images['fixed_height'].url)
        }) // 권장하지않음!!

        // for문을 수행할때는 for (const data of jsonData.data) 이런식으로 const를 명시해야함
        // const를 명시하지 않으면 var data와 동일하게 처리되는데, 
        // 이러면 getTrendImages내에서 data가 유일하게 존재하는 것이기 때문에
        // 계속 for문을 돌때마다 오버라이드를 한다.
        
        // forEach보다 for문을 선호하는데, 비동기적인 작업을 할 때 별로 안좋다고함.
    })
}

getTrendImages()

console.log(trendImage)

// 2. 트렌딩 이미지를 시간지날때마다 계속해서 바꿔준다.
// 2-1. idx라는 변수에 시간이 지날때마다 값을 바꿔줌.

const tv_img = document.querySelector('#js-tv');
let idx = 0

setInterval(()=>{
    idx = (idx + 1) % 25
    tv_img.src = trendImage[idx]
}, 2*1000)

