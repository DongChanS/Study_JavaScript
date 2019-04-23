function sum1(a, b) {
    return a + b
}

let sum2 = function(a, b){
    return a + b
}

let sum3 = (a, b) => {
    return a + b
}

let sum4 = (a, b) => a + b;

let menu = ['짜장면', '짬뽕', "쌈밥", "김밥"]
menu.forEach(function(food){
    console.log(food)
})