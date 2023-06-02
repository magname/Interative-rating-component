let buttons = document.querySelectorAll('.buttons');
let submit = document.querySelector('.btn');
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.second');
let rating = document.getElementById("rating");
submit.addEventListener('click', () =>{
    container2.classList.remove('hidden');
    container1.style.display = 'none';
})
// Using For each loop to iterate over buttons and the text inside the button selected in the span tag of id ratings
    // buttons.forEach((rate) => {
    //  rate.addEventListener('click', () => {
    //     rating.innerText = rate.innerHTML;
    //  })   
    // });
    
// Using ForOf loop to iterate over buttons and the text inside the button selected in the span tag of id ratings
    for (let key of buttons) {
        key.addEventListener('click', () =>{
            // console.log(key.innerHTML);
            rating.innerText = key.innerHTML;
        })
    }