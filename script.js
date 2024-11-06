const secondHand = document.querySelector('.hour-seconds');
const minutesHand = document.querySelector('.hour-minutes');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

     // Avoid transition glitch when seconds reset from 59 to 0
     if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'transform 0.05s cubic-bezier(0.4, 2.3, 0.3, 1)';
    }

    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hour = now.getHours();
    const hoursDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);