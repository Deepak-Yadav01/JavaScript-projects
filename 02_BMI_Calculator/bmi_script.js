const form = document.querySelector('form')
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(event){
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = 'please give a valid height'
    }else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'please give a valid weight'
    } else {
        const bmi = (weight /((height*height)/10000)).toFixed(2);
        // to show the results
            results.innerHTML = `<span>${bmi}</span>`

            // for message passing
            let message;

            if (bmi < 18.6) {
                message = 'You are underweight.';
            } else if (bmi >= 18.6 && bmi <= 24.9) {
                message = 'You are normal.';
            } else {
                message = 'You are overweight.';
            }
            // Show both BMI value and message
        results.innerHTML = `<span>BMI: ${bmi} </span> <br/> ${message}`;
}
})