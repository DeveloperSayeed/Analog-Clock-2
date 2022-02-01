const hr = document.querySelector(".h")
const min = document.querySelector(".m")
const sec = document.querySelector(".s")


setInterval(() => {
    let time = new Date();

    let hours = time.getHours() *30
    let minute = time.getMinutes() * 6
    let seconds = time.getSeconds() * 6

    hr.style.transform = `rotateZ(${(hours)+(minute/12)}deg)`;
    min.style.transform = `rotateZ(${minute}deg)`;
    sec.style.transform = `rotateZ(${seconds}deg)`;

    console.log(hours, minute, seconds);

}, 1000)