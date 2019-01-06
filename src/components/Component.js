
export default class Component {
  constructor(data) {
    // this.parentComponent = null;
    this.htmlElement = null;
    this.data = data;
    this.template = '';
  }

  render () {
    const newElement = document.createElement('div');
    newElement.innerHTML = this.template;

    this.htmlElement = newElement;

    return newElement;
  }

  // setParent (parentComponent) {
  //   this.parentComponent = parentComponent;
  // }
}