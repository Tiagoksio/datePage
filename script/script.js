class RunAwayBtn {
    constructor(btnYesSelector, btnNoSelector) {
        this.btnYes = document.querySelector(btnYesSelector);
        this.btnNo = document.querySelector(btnNoSelector);

        this.initEvents();
    }

    initEvents() {
        this.btnYes.addEventListener("click", () => this.confirm());
        this.btnNo.addEventListener("mouseover", () => this.runAway());
    }

    confirm() {
        alert("bora!");
    }

    runAway() {
        const widthWindow = window.innerWidth;
        const heightWindow = window.innerHeight;

        const maxWidthWindow = widthWindow - this.btnNo.offsetWidth;
        const maxHeightWindow = heightWindow - this.btnNo.offsetHeight;

        const randomX = Math.floor(Math.random() * maxWidthWindow);
        const randomY = Math.floor(Math.random() * maxHeightWindow);

        this.btnNo.style.position = "absolute";
        this.btnNo.style.left = `${randomX}px`;
        this.btnNo.style.top = `${randomY}px`;
    }
}

class Heart {
    constructor(){
        this.container = document.querySelector('.heartContainer')

        setInterval(this.heartFactory.bind(this), 500);
    }

    heartFactory() {
        const heartCreat = document.createElement('div');
        heartCreat.classList.add('hearts');
        heartCreat.innerHTML = '❤️';
        heartCreat.style.left = Math.random() * 100 + 'vw';
        heartCreat.style.animationDuration = Math.random() * 3 + 2 + 's';
        this.container.appendChild(heartCreat)
        setTimeout(()=>{
            heartCreat.remove();
        }, 6000)

    }
}


// Inicialização da classe
const btnListener = new RunAwayBtn("#btnYes", "#btnNo");
const fallingHearts = new Heart();