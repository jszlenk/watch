import Stopwatch from './Stopwatch.js';
class StopwatchWithResults extends Stopwatch {
    constructor(element) {
        super(element);
        this.results = [];
        this.prepareElements(element);
        this.prepareActions();
    }
    prepareElements(element) {
        this.dom.resultsList = element.querySelector('.stopwatch__results ul');
        this.dom.addToListBtn = element.querySelector('.stopwatch__add-to-list-btn');
        this.dom.resetListBtn = element.querySelector('.stopwatch__reset-list-btn');
    }
    prepareActions() {
        this.dom.addToListBtn.addEventListener('click', () => {
            this.addToList();
        });
        this.dom.resetListBtn.addEventListener('click', () => {
            this.resetList();
        });
    }
    renderList() {
        this.dom.resultsList.innerHTML = '';
        this.results.forEach((result) => {
            const li = document.createElement('li');
            li.textContent = result;
            this.dom.resultsList.appendChild(li);
        });
    }
    addToList() {
        const formattedTime = this.formatTime(this.currentTime);
        this.results.push(formattedTime);
        this.renderList();
    }
    resetList() {
        this.results = [];
        this.dom.resultsList.innerHTML = '';
    }
}
export default StopwatchWithResults;
//# sourceMappingURL=StopwatchWithResults.js.map