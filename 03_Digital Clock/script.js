const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock') // You acn use also this


let date = new Date()
console.log(date.toLocaleTimeString)

setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString)
    // clock.innerText = date.toLocaleString('en-IN',{timeZone: 'Asia/Kolkata'})
    clock.innerText = date.toLocaleTimeString()
} , 1000);