let dooly = document.querySelector('#dooly')
console.log(dooly)

dooly.addEventListener('click', function(e){
    alert('호이')
    console.log(e)
})

document.addEventListener('keydown', function(e){

    if (e.keyCode === 38 ) {
        dooly.style.marginBottom = "100px";
    } 
})