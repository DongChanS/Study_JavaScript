// axios (javascript version of python requests)

const URL = "https://jsonplaceholder.typicode.com/posts"

const XHR = new XMLHttpRequest()

XHR.open('GET', URL)

XHR.send()

XHR.addEventListener('load', function(e){
    const result = e.target.response
    console.log(typeof result)
    const jsObject = JSON.parse(result)
    console.log(jsObject)
    // const jsonString = JSON.stringify(jsObject)
    console.log(jsObject[0].title)

})