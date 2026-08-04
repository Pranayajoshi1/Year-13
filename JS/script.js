
// For header

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};


// for window scroll 

window.onscroll = () => {
     menu.classList.remove('fa-times');
     navbar.classList.remove('active');

      if(window.scrollY > 0){
         document.querySelector('.header').classList.add('active')
      }else{
        document.querySelector('.header').classList.remove('active');
      }

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