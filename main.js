let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow = document.querySelector('.h'),
    hourNumber = document.querySelector('.hours'),
    minuteNumber = document.querySelector('.minutes');
    
function clock() {
    let time = new Date(),
        seconds = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30;
        
        secondArrow.style = `transform: rotate(${seconds}deg)`;
        minuteArrow.style = `transform: rotate(${minutes}deg)`;
        hourArrow.style = `transform: rotate(${hours}deg)`;
    
        hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours();
        minuteNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes();

        setTimeout(() => clock(), 1000);
}

clock();



// Рекурсия это когда функция вызывает саму себя
// setTimeout() - позволяет выполнять действия с задержкой




// let i = 0;

// function rek() {
//     if(i < 100) {
//         console.log(i);
//         i++
//        setTimeout(() => rek(),1000)
//     }
   
// }
// rek()


let links = document.querySelectorAll('.tabsItem');
let tabs = document.querySelectorAll('.tabsContentItem');

links.forEach((link, i) => {
    link.addEventListener('click', () => {
        removeActive();
        link.classList.add('active');
        tabs[i].classList.add('active');
    });
});

function removeActive() {
    links.forEach((el,i) => {
        el.classList.remove('active');
        tabs[i].classList.remove('active');
    });
}



let stopwatch = document.querySelector('.stopwatch__btn');
let stopwatchSeconds = document.querySelector('.stopwatch__seconds');
let stopwatchMinutes = document.querySelector('.stopwatch__minutes');
let stopwatchHours = document.querySelector('.stopwatch__hours');
let indicator = document.querySelector('.tabsLink__span');

stopwatch.addEventListener('click', () => {
    if (stopwatch.innerHTML == 'start') {
        stopwatch.innerHTML = 'stop';
        indicator.classList.add('active');
        timer(); 
    } else if (stopwatch.innerHTML == 'stop') {
        indicator.classList.add('active_clear');
        stopwatch.innerHTML = 'clear';
    } else {
        indicator.classList.remove('active_clear');
        indicator.classList.remove('active');
        stopwatch.innerHTML = 'start';
        clear();
    }
    
});

function clear() {
    stopwatchSeconds.innerHTML = 0;
    stopwatchMinutes.innerHTML = 0;
    stopwatchHours.innerHTML = 0;
}


function timer() {
    stopwatchSeconds.innerHTML++;
    if (stopwatchSeconds.innerHTML == 59) {
        stopwatchMinutes.innerHTML++;
        stopwatchSeconds.innerHTML = 0;
        if (stopwatchMinutes.innerHTML == 59) {
            stopwatchHours.innerHTML++;
            stopwatchMinutes.innerHTML = 0;
        }
    }
    let rek = setTimeout(() => timer(), 1000);
    if (stopwatch.innerHTML == 'clear') {
        clearTimeout(rek);
        console.log('stop');
    }
}