let year = document.getElementById("calculated-year");
let month = document.getElementById("calculated-month");
let day =document.getElementById("calculated-day");

const currentDate = new Date();

year.textContent = 1970;
month.textContent = 1;
day.textContent = 1;

function changeDay(value){
    day.textContent = value - currentDate.getDay();
    if (parseInt(month.textContent)%2 !== 0) {
    if (value == 31) {
        day.textContent = 28;
    }
    } else if (month.textContent == 2) {
    if (value == 28) {
        day.textContent = 28;
    }
    } else {
    if (value == 30) {
        day.textContent = 30;
    }
    }
}

const changeMonth = (value) => {
    if (currentDate.getMonth() > value){
        month.textContent = currentDate.getMonth() - value;
    } else {
        month.textContent = value - currentDate.getMonth();
    }
}

const changeYear = (value) => {
    year.textContent = currentDate.getFullYear() - value;
}