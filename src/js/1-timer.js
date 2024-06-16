import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import imageUrl from '../img/alert-icon.svg';




const refs = {
 timeInput : document.querySelector('#datetime-picker'),
 startBtn : document.querySelector('[data-start]'),
 dayBlock : document.querySelector('[data-days]'),
 hoursBlock : document.querySelector('[data-hours]'),
 minutesBlock : document.querySelector('[data-minutes]'),
 secondsBlock : document.querySelector('[data-seconds]'),
};

let userSelectedDate;
let intervalId;

const iziToastOptions = {
    message: 'Please choose a date in the future',
    position: 'topRight',
    backgroundColor: '#B51B1B',
    messageColor: '#fff',
    messageSize: '16',
    imageWidth: 302,
   close: '../img/close-icon.svg',
    closeOnEscape: true,
    closeOnClick: true,

    progressBarColor: '#b51b1b',
    iconUrl: imageUrl,
    iconColor: '#FAFAFB',
  };

refs.timeInput.disabled = false;
const flatpickrOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0];
           if (userSelectedDate < Date.now()){
            iziToast.show(iziToastOptions);;

        } else {
            refs.startBtn.disabled = false;
            refs.startBtn.classList.add('right-date');
        }
    },
};

flatpickr(refs.timeInput, flatpickrOptions);

refs.startBtn.addEventListener('click', () => {
    refs.startBtn.classList.remove('right-date');
    refs.timeInput.disabled = true;
    refs.startBtn.disabled = true;

       

    intervalId = setInterval(() => {
        const currentTime = Date.now();
        const diff = userSelectedDate - currentTime;
        const time = convertMs(diff);
        const timeCount = getTime(time);
        
        refs.dayBlock.textContent = timeCount.days;
        refs.hoursBlock.textContent = timeCount.hours;
        refs.minutesBlock.textContent = timeCount.minutes;
        refs.secondsBlock.textContent = timeCount.seconds;
    }, 1000);
    
 setTimeout(() => {
        clearInterval(intervalId);
        refs.timeInput.disabled = false;
    }, userSelectedDate - Date.now());
    
    
});


  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
  function getTime({days, hours, minutes, seconds }) {
    days = days.toString().padStart(2,'0');
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    return {days, hours, minutes, seconds};
  }