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
    let hours = (date.getHours() % 12).toString();
    let minutes = date.getMinutes().toString();
    let seconds = date.getSeconds().toString();
    let amPM = hours < 12 ? "PM" : "AM";

    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours.length < 2) {
        hours = "0" + hours;
    }

    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
        seconds = "0" + seconds;
    }

    let clockString = hours + " : " + minutes + " : " + seconds + " " + amPM;
    let colorString = "#" + hours + minutes + seconds;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.backgroundColor = colorString;
}

digiClock();
setInterval(digiClock, 1000);



