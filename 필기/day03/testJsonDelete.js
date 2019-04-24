const XHR = new XMLHttpRequest()

const URL = "https://jsonplaceholder.typicode.com/posts/1"

XHR.open("DELETE", URL)

XHR.setRequestHeader(
    'Content-Type',
    'application/json;charset=UTF-8'
)

XHR.send()

XHR.addEventListener('load', function(e){
    let res = e.target.response

    let jsonObj = JSON.parse(res)

    console.log(res)
})