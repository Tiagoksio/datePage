class BotaoFujao {
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

// Inicialização da classe
const app = new BotaoFujao("#btnYes", "#btnNo");