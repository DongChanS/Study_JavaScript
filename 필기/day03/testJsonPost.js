const XHR = new XMLHttpRequest()

const URL = "https://jsonplaceholder.typicode.com/posts"

XHR.open('POST', URL)

XHR.setRequestHeader(
    'Content-Type',
    'application/json;charset=UTF-8'
)

let data = {
    userId : 1,
    title : 'dongchans',
    body : 'ㅈㄱㄴ'
}

data = JSON.stringify(data)

XHR.send(data)

XHR.addEventListener('load', function(e){
    const result = e.target.response
    const jsonObj = JSON.parse(result)
    console.log(jsonObj)
})

