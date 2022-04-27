const refs = {
    bodyRef: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start'),
    stopBtn: document.querySelector('button[data-stop'),
}

const styleSetter = {

    intervalId: null,
    isActive: false,

    getRandomHexColor() {

        return refs.bodyRef.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },

    start() {
        
        if (!this.isActive) {
           
            this.intervalId = setInterval(() => {
                this.getRandomHexColor()
            }, 1000);

            this.isActive = true;
            
            refs.startBtn.disabled = true;
        }

        return;
    },

    stop() {
        console.log('unclicked')
        refs.startBtn.disabled = false;

        clearInterval(this.intervalId);
        this.isActive = false;
    },
};

refs.startBtn.addEventListener('click', () => {styleSetter.start()});

refs.stopBtn.addEventListener('click', () => { styleSetter.stop() });
    