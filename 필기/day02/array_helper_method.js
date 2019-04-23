const posts = [
    {id:1, title:"안녕"},
    {id:2, title:"자바스크립트"},
    {id:3, title:"브라우저 조작"},
]

posts.forEach(function(post) {

    if (post.id == "2"){
        console.log(post)
    }

})

const images = [
    {height:10, width:30},
    {height:20, width:90},
    {height:50, width:40},
    {height:10, width:60},
]

const area = []

images.forEach(function(image){
    area.push(image.height*image.width);
})

console.log(area)

const numbers = [1,2,3,4,5,6];
let squaredNumbers = numbers.map(function(num){
    return num*num;
})

console.log(squaredNumbers)


// find

let users = [

    {id:1, username:'tony'},
    {id:2, username:'steve'},
    {id:3, username:'thor'},
    {id:4, username:'tony'},

]

let tony = users.find(function(user){
    return user.username === 'tony'
})

console.log(tony)

// filter

let tonys = users.filter(function(user){
    return user.username === 'tony'
})

console.log(tonys)

// reject
// array의 원소들 중에서 func의 결과가 false인것들만 뽑아내는 것!

let reject = function(array, func) {

    var res = []
    array.forEach( function(e) {
        if ( func(e) === false ) {
            res.push(e)
        }  
    })
    return res

}

let reject2 = function(array, func) {

    return array.filter(function(e) {
        return !func(e)
    })
}

const not_tonys = reject2(users, function(user){
    return user.username == "tony"
})

console.log(not_tonys)

// every

// some