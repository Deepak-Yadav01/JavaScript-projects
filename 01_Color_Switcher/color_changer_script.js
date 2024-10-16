const body = document.querySelector("body")
const buttons = document.querySelectorAll(".button")

buttons.forEach(function (button) {
    button.addEventListener('click',function (event) {
        console.log(event);
        console.log(event.target);
        if (event.target.id === 'grey') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'white') {
            body.style.backgroundColor = "#fff";
        }
        if (event.target.id === 'blue') {
            body.style.backgroundColor = "blue";
        }
        if (event.target.id === 'yellow') {
            body.style.backgroundColor = event.target.id;
        }
        if (event.target.id === 'aqua') {
            body.style.backgroundColor = event.target.id;
        }
    })
})
