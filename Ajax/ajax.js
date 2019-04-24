// Ajax

// class
const XHR = new XMLHttpRequest()

const URL = 'https://koreanjson.com/posts/1';

XHR.open('GET', URL);

XHR.send()

XHR.addEventListener('load', event => {
    let res = event.target.response
    const parsedData = JSON.parse(res)
    console.log(parsedData)
})