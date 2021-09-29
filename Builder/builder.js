class HTMLElement {
    constructor(element = '', text = '') {
        this.element = element;
        this.text = text;
        this.children = [];
    }
}

class HTMLBuilder {
    constructor(element) {
        this.htmlElement = new HTMLElement(element);
        this.element = element;
    }

    withChild(childName, childText) {
        let child = new HTMLElement(childName, childText);
        this.htmlElement.children.push(child);
        return this;
    }

    build() {
        return this.htmlElement;
    }
}

const htmlElement = new HTMLBuilder('ul')
    .withChild('li', 'Shenzi')
    .withChild('li', 'Banzai')
    .withChild('li', 'Ed')
    .build();
console.log(htmlElement);
