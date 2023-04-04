function setTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();

    const hourHand = document.querySelector('.hour');
    const minuteHand = document.querySelector('.minute');
    const secondHand = document.querySelector('.second');
    const millisecindshand = document.querySelector('.milliseconds')

    hourHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
    minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
    secondHand.style.transform = `rotate(${seconds * 6}deg)`;
    millisecindshand.style.transform = `rotate(${(360 / 1000) * milliseconds}deg)`;
}

setInterval(setTime, 20);