// Homework: write a small program that prints the actual date in real time on the screen.
//       the project should have:
//       printing the clock in am/pm;
//       the background-color of the screen changes dynamically;
//       the whole project is styled


// const date = new Date();
// console.log(date.getHours() % 12);
// console.log(date.getMinutes());
// console.log(date.getSeconds());


let clock = document.getElementById("digitalClock");
let color = document.getElementById("hexColor");

function digiClock() {
    const date = new Date();
    let hours = date.getHours().toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    let amPM = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    let clockString = hours + " : " + minutes + " : " + seconds + " " + amPM;
    let colorString = "#" + hours + minutes + seconds;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.backgroundColor = colorString;
}

digiClock();
setInterval(digiClock, 1000);



