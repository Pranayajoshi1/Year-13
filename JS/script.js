

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};



window.onscroll = () => {
     menu.classList.remove('fa-times');
     navbar.classList.remove('active');

      if(window.scrollY > 0){
         document.querySelector('.header').classList.add('active')
      }else{
        document.querySelector('.header').classList.remove('active');
      }

}

function slideLeft() {
    document.getElementById("categorySlider").scrollLeft -= 350;
}

function slideRight() {
    document.getElementById("categorySlider").scrollLeft += 350;
}


const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".exercise-content");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));
        tab.classList.add("active");
        document
            .getElementById(tab.dataset.target)
            .classList.add("active");
    });
});

// ---------------- Calorie Calculator ----------------

let calculateButton = document.getElementById("calculate-btn");
let calculatorResult = document.getElementById("calculator-result");
calculateButton.addEventListener("click", calculateCalories);


function calculateCalories() {

    let age = Number(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let height = Number(document.getElementById("height").value);
    let weight = Number(document.getElementById("weight").value);
    let activity = Number(document.getElementById("activity").value);

if (age === 0 || height === 0 || weight === 0 || gender === "" || activity === 0) {

    calculatorResult.innerHTML = `
        <div class="result-icon">
            <i class="fas fa-exclamation"></i>
        </div>

        <p>
            Please fill in all the details before calculating.
        </p>
    `;

    return;
}

if (age < 15) {

    calculatorResult.innerHTML = `
        <div class="result-icon">
            <i class="fas fa-exclamation"></i>
        </div>

        <p>
            You must be at least 15 years old to use this calculator.
        </p>
    `;
    return;
}
    let bmr;
    if (gender === "male") {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
        bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;

    }


    let calories = bmr * activity;
    calories = Math.round(calories);
    calculatorResult.innerHTML = `

        <div class="result-icon">
        </div>

        <p class="result-heading">
            Your estimated daily energy needs are:
        </p>

        <div class="calorie-number">
            ${calories} kcal/day
        </div>

        <p>
            This is an estimate based on the information you entered.
        </p>

    `;
}

