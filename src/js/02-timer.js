import flatpickr from "flatpickr";

const options = {
  enableTime: true,
    time_24hr: true,
  currentDate: Date.now(),
    defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

        if (Date.parse(selectedDates) <= Date.now()) {
          
                return alert("Please choose a date in the future");
        }
 
        return selectedDates[0];
        },
};

const refs = {
    inputRef: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    daysRef: document.querySelector('[data-days]'),
    hoursRef: document.querySelector('[data-hours]'),
    minRef: document.querySelector('[data-minutes]'),
    secRef: document.querySelector('[data-seconds]'),
};

flatpickr('#datetime-picker', options);
console.log(Date.parse(refs.inputRef.value))

class Timer {

    constructor({onTick}) {
        this.isActive = false;
        this.intervalId = null;
        this.onTick = onTick;
    };

    start() {
        const finalDate = Date.parse(refs.inputRef.value);
        
        if (this.isActive) {
            refs.startBtn.disabled = true;
            refs.inputRef.disabled = true;
            return;
        }
        
        this.intervalId = setInterval(() => {
            this.isActive = true;
            const currentTime = Date.now();
            const leftTime = finalDate - currentTime;
            const time = convertMs(leftTime);

            refs.daysRef.textContent = time.days;
            refs.hoursRef.textContent = time.hours;
            refs.minRef.textContent = time.minutes;
            refs.secRef.textContent = time.seconds;
        }, 1000);
    };

    stop() {

        this.isActive = false;
        clearInterval(intervalId);
    }
}

const timer = new Timer({
    onTick: convertMs,
});


refs.startBtn.addEventListener('click', () => { timer.start() });

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


 