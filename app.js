const countdown = () => {
    const countDate = new Date("June 3, 2023 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    // Time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Calculate

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerText = `${textDay}:`;
    document.querySelector(".hour").innerText = `${textHour < 10 ? `${'0' + textHour}` : textHour}:`;
    document.querySelector(".minute").innerText = `${textMinute < 10 ? `${'0' + textMinute}` : textMinute}:`;
    document.querySelector('.second').innerText = `${textSecond < 10 ? `${'0' + textSecond}` : textSecond}`;
}

setInterval(countdown, 0);