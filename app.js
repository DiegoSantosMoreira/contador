const secondsFromHtml = document.querySelector('#second');
const minutesFromHtml = document.querySelector('#minute');
const hoursFromHtml = document.querySelector('#hour');
const daysFromHtml = document.querySelector('#day');

const nextYear = new Date().getFullYear() + 1;
const dataParty = new Date (`July 29 ${nextYear} 00:00:00`);



const updateDate = () =>{
    const currentDate = new Date();
    const differenceBeteweenDates = dataParty - currentDate;
    const days = Math.floor(differenceBeteweenDates / 1000 / 60 / 60 /24);
    const hours = Math.floor(differenceBeteweenDates / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(differenceBeteweenDates / 1000 / 60) % 60;
    const seconds = Math.floor(differenceBeteweenDates / 1000) % 60;
    
    secondsFromHtml.textContent = seconds;
    minutesFromHtml.textContent = minutes;
    hoursFromHtml.textContent = hours;
    daysFromHtml.textContent = days;

    
}

setInterval(updateDate, 1000);

