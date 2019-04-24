const XHR = new XMLHttpRequest()

const URL = "https://jsonplaceholder.typicode.com/posts/1"

XHR.open("PUT", URL)

XHR.setRequestHeader(
    'Content-Type',
    'application/json;charset=UTF-8'
)

let data = {
    userId : 1,
    postId : 1,
    title : 'dongchans',
    body : 'ㅈㄱㄴ'
}

XHR.send(JSON.stringify(data))

XHR.addEventListener('load', function(e){
    let res = e.target.response

    let jsonObj = JSON.parse(res)

    console.log(res)
})