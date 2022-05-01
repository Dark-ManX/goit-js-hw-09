const refs = {
    bodyRef: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start'),
    stopBtn: document.querySelector('button[data-stop'),
}

class ColorSetter {

    constructor({ onChange }) {
        this.intervalId = null;
        this.isActive = false;
        // this.onChange = onChange;
    };

    start() {
        
        if (!this.isActive) {
           
            this.intervalId = setInterval(() => {
                getRandomHexColor();
            }, 1000);

            this.isActive = true;           
            refs.startBtn.disabled = true;  
        }

        return;
    };

    stop() {
        
        refs.startBtn.disabled = false;

        clearInterval(this.intervalId);
        this.isActive = false;
    };
};

const colorSet = new ColorSetter({
    // onChange: getRandomHexColor,
});

refs.startBtn.addEventListener('click', () => {colorSet.start()});

refs.stopBtn.addEventListener('click', () => { colorSet.stop() }); 

function getRandomHexColor() {
    return refs.bodyRef.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
