class HTMLElement {
  private element: string;
  private text: string;
  public children: HTMLElement[];

  constructor(element = '', text = '') {
    this.element = element;
    this.text = text;
    this.children = [];
  }
}

class HTMLBuilder {
  private htmlElement;
  private element: string;

  constructor(element: string) {
    this.htmlElement = new HTMLElement(element);
    this.element = element;
  }

  public withChild(childName: string, childText: string): HTMLBuilder {
    const child = new HTMLElement(childName, childText);
    this.htmlElement.children.push(child);
    return this;
  }

  public build(): HTMLElement {
    return this.htmlElement;
  }
}

export default HTMLBuilder;
