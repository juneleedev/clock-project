setInterval(() =>{
    let clock = document.getElementById("clock");
    const date = new Date();

    let hours = (date.getHours() < 10 ? "0" : "") + date.getHours();
    let mins = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
    let sec = (date.getSeconds() < 10 ? "0" : "") +  date.getSeconds();

    let amPm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;

    clock.innerHTML = hours + ":" + mins + ":" + sec +' '+ amPm;
}, 1000);

