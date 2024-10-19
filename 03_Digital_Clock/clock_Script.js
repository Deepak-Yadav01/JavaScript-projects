// const clock = document.getElementById('clock')
const clock = document.querySelector('#clock')


setInterval(() => {
    let date = new Date()
// console.log(date.toLocaleTimeString());
// clock.innerHTML = date.toLocaleTimeString() //it render only time
clock.innerHTML = `${date.toLocaleDateString()} <br> ${date.toLocaleTimeString()}`;
}, 1000);// 1000 is equivalent to 1second which is 1000 miliseconds, for 2 seconds gaps we can use 2000.