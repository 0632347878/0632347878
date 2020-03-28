import debounce from './debounce'

export default class AnimatedElement {
  constructor(eAnimateElement) {

    this.classNames = {
      hidden: 'h-animate-up--hidden'
    };

    this.settings = {
      offset: 40
    };

    this.debouncedScroll = debounce(function() {
      this.checkIfElementIsInViewport();
    }, 60);

    this.eAnimateElement = eAnimateElement;
    window.addEventListener('scroll', this);
  }

  checkIfElementIsInViewport() {
    let rect = this.eAnimateElement.getBoundingClientRect(),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop,
      yPos = parseInt(rect.top + scrollTop);

    if (yPos < parseInt(scrollTop + (window.innerHeight - this.settings.offset))) {
      this.eAnimateElement.classList.remove(this.classNames.hidden);

      // let src = this.eAnimateElement.src;
      let lazySrc = this.eAnimateElement.dataset.src;

      this.eAnimateElement.src = lazySrc;

      console.log('Element inViewport');
      window.removeEventListener('scroll', this);
    }
  }

  handleEvent(event) {
    if (event.type === 'scroll') {
      this.debouncedScroll();
    }
  }
}
