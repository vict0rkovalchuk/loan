export default class Slider {
  constructor({
    container = null,
    btns = null,
    next = null,
    prev = null,
    modulePrev = null,
    moduleNext = null,
    activeClass = '',
    animate,
    autoplay
  } = {}) {
    this.container = document.querySelector(container);
    try {
      this.slides = this.container.children;
    } catch (error) {}
    this.btns = document.querySelectorAll(btns);
    this.prev = document.querySelector(prev);
    this.next = document.querySelector(next);
    this.modulePrev = document.querySelectorAll(modulePrev);
    this.moduleNext = document.querySelectorAll(moduleNext);
    this.activeClass = activeClass;
    this.animate = animate;
    this.autoplay = autoplay;
    this.slideIndex = 1;
  }
}
