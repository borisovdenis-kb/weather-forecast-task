
export default class Component {
  constructor(data) {
    this.domElement = null;
    this.data = data;
    this.template = '';
    this.isRendered = false;
  }

  render () {
    if (this.isRendered) {
      return;
    }

    const newElement = document.createElement('div');
    newElement.innerHTML = this.template;

    this.domElement = newElement;
    this.isRendered = true;

    return newElement;
  }

  appendChildComponent (childComponent) {
    throw new Error('method appendChildComponent must be implemented');
  }
}