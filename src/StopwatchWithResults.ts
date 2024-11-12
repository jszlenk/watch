import Stopwatch from './Stopwatch.js';

class StopwatchWithResults extends Stopwatch {
  private results: string[] = [];

  constructor(element: HTMLDivElement) {
    super(element);
    this.prepareElements(element);
    this.prepareActions();
  }

  private prepareElements(element: HTMLDivElement): void {
    this.dom.resultsList = element.querySelector('.stopwatch__results') as HTMLUListElement;
    this.dom.addToListBtn = element.querySelector('.stopwatch__add-to-list-btn') as HTMLButtonElement;
    this.dom.resetListBtn = element.querySelector('.stopwatch__reset-list-btn') as HTMLButtonElement;
  }

  private prepareActions(): void {
    this.dom.addToListBtn.addEventListener('click', () => {
      this.addToList();
    });
    this.dom.resetListBtn.addEventListener('click', () => {
      this.resetList();
    });
  }

  private renderList(): void {
    this.dom.resultsList.innerHTML = '';

    this.results.forEach((result: string) => {
      const li = document.createElement('li');
      li.textContent = result;
      this.dom.resultsList.appendChild(li);
    });
  }

  private addToList(): void {
    const formattedTime = this.formatTime(this.currentTime);
    this.results.push(formattedTime);
    this.renderList();
  }

  private resetList(): void {
    this.results = [];
    this.dom.resultsList.innerHTML = '';
  }
}

export default StopwatchWithResults;
