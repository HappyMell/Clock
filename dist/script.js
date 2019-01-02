

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const bigHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;


    const minute = now.getMinutes();
    const minuteHands = ((minute / 60) * 360) + ((seconds / 60) * 6) + 90;
    minuteHand.style.transform = `rotate(${minuteHands}deg)`;

    const hour = now.getHours();
    const hourHand = ((hour / 12) * 360) + ((minute / 60) * 6) + 90;
    bigHand.style.transform = `rotate(${hourHand}deg)`;


}

setInterval(setDate, 1000);