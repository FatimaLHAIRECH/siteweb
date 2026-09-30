const hourE1 = document.getElementById('hour');
const minuteE1 = document.getElementById('minutes');
const secondeE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if(h > 12){
        h = h - 12;
        ampm = 'PM';
    }
    hourE1.innerHTML = h;
    minuteE1.innerText = m;
    secondeE1.innerText = s;
    ampmE1.innerHTML = ampm;
}

updateClock();