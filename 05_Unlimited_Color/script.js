// generate a random color

const randomColor = function(){
    const hex = '0123456789ABCDEF'
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
};
// console.log(randomColor());

let intervalId;

const startChangingColor = function(){
    // document.body.style.backgroundColor = randomColor();
    function changeBGcolor(){
        document.body.style.backgroundColor = randomColor();
    }
    // intervalId = setInterval(changeBGcolor,1000)
    if(!intervalId){
        intervalId = setInterval(changeBGcolor,1000)
    }
}
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
  };


  // Add event listeners to buttons
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)