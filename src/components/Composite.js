import Component from "./Component";

export default class Composite extends Component {
  constructor(data) {
    super(data);
    this.children = [];
  }

  addChild (childComponent) {
    this.children.push(childComponent);
  }

  removeChild (childComponent) {
    this.children = this.children.filter(c => c !== childComponent);
  }

  render () {
    super.render();
    this.children.forEach(component => {
      let renderedComponent = component.render();
      this.htmlElement.appendChild(renderedComponent);
    });

    return this.htmlElement;
  }
}