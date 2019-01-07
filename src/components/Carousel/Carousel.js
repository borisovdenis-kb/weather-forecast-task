import './style.css';
import Component from "../Component";

const SHIFT_VALUE = 180;
const VISIBLE_ITEMS_AMOUNT = 4;

// TODO: избавиться от лишних div оберток!!!

export default class Carousel extends Component {
  constructor (data) {
    super(data);
    this.children = [];
    this.currentShiftOffset = 0;
    this.template = `
      <div class="carousel"></div>
    `;
  }

  render () {
    const newElement = super.render();
    this.children.forEach(child => {
      if (!child.isRendered) {
        child.render();
        this.appendChildComponent(child);
      }
    });

    return newElement;
  }

  addItem (childComponent) {
    this.children.push(childComponent);
  }

  appendChildComponent (childComponent) {
    if (!childComponent.isRendered) {
      throw new Error('component has not been rendered yet');
    }

    const carouselElement = this.domElement.getElementsByClassName('carousel')[0];
    carouselElement.appendChild(childComponent.domElement);
  }

  leftShift () {
    const carouselElement = this.domElement.getElementsByClassName('carousel')[0];

    if (this.currentShiftOffset === 0) {
      carouselElement.style.transform = `translateX(15px)`;
      setTimeout(() => {
        carouselElement.style.transform = `translateX(0px)`;
      }, 400);
      return;
    }

    this.currentShiftOffset += SHIFT_VALUE;
    carouselElement.style.transform = `translateX(${this.currentShiftOffset}px)`;
  }

  rightShift () {
    const carouselElement = this.domElement.getElementsByClassName('carousel')[0];

    if (Math.abs(this.currentShiftOffset) === SHIFT_VALUE * (this.children.length - VISIBLE_ITEMS_AMOUNT)) {
      carouselElement.style.transform = `translateX(${this.currentShiftOffset - 15}px)`;
      setTimeout(() => {
        carouselElement.style.transform = `translateX(${this.currentShiftOffset}px)`;
      }, 400);
      return;
    }

    this.currentShiftOffset -= SHIFT_VALUE;
    carouselElement.style.transform = `translateX(${this.currentShiftOffset}px)`;
  }
}