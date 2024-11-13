class Stopwatch {
    constructor(element) {
        this.currentTime = 0;
        this.timer = null;
        this.dom = {};
        this.getElements(element);
        this.initActions();
        this.renderTime();
    }
    getElements(element) {
        this.dom.currentTime = element.querySelector('.stopwatch__current-time');
        this.dom.startBtn = element.querySelector('.stopwatch__start-btn');
        this.dom.stopBtn = element.querySelector('.stopwatch__stop-btn');
        this.dom.resetBtn = element.querySelector('.stopwatch__reset-btn');
    }
    initActions() {
        this.dom.startBtn.addEventListener('click', () => this.start());
        this.dom.stopBtn.addEventListener('click', () => this.stop());
        this.dom.resetBtn.addEventListener('click', () => this.reset());
    }
    formatTime(time) {
        const pad0 = (num) => (num < 10 ? `0${num}` : num.toString());
        const mm = Math.floor(time / 60000);
        const ss = Math.floor((time - mm * 60000) / 1000);
        const ms = time - mm * 60000 - ss * 1000;
        return `${pad0(mm)}:${pad0(ss)}:${pad0(ms).substr(0, 2)}`;
    }
    renderTime() {
        this.dom.currentTime.innerHTML = this.formatTime(this.currentTime);
    }
    start() {
        if (!this.timer) {
            this.timer = window.setInterval(() => { this.step(); }, 1);
        }
    }
    step() {
        this.currentTime = this.currentTime + 1;
        this.renderTime();
    }
    stop() {
        window.clearInterval(this.timer);
        this.timer = null;
    }
    reset() {
        this.currentTime = 0;
        this.renderTime();
    }
}
export default Stopwatch;
//# sourceMappingURL=Stopwatch.js.map