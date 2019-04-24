const URL = "https://jsonplaceholder.typicode.com/posts/"

const res = fetch(URL)
.then(response => response.json())
.then(obj => obj)

console.log(res)