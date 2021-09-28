class HTMLElement {
    static indentSize = 2;

    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    format(indent) {
        let html = [];
        let i = ' '.repeat(indent * HTMLElement.indentSize);
        html.push(`${i}<${this.name}>\n`);
        if (this.text.length > 0) {
            html.push(' '.repeat(HTMLElement.indentSize * (indent + 1)));
            html.push(this.text);
            html.push('\n');
        }

        for (let child of this.children) {
            html.push(child.format(indent + 1));
        }
        html.push(`${i}</${this.name}>\n`);
        return html.join('');
    }

    toString() {
        return this.format(0);
    }

    static create(name) {
        return new HTMLBuilder(name);
    }
}

class HTMLBuilder {
    constructor(element) {
        this.htmlElement = new HTMLElement(element);
        this.element = element;
    }

    addChild(childName, childText) {
        let child = new HTMLElement(childName, childText);
        this.htmlElement.children.push(child);
        return this;
    }

    toString() {
        return this.htmlElement.toString();
    }

    clear() {
        this.htmlElement = new HTMLElement(this.element);
    }

    build() {
        return this.htmlElement;
    }
}

const names = ['Shenzi', 'Banzai', 'Ed'];
let htmlBuilder = HTMLElement.create('ul');

// ordinary non-fluent builder
for (let name of names) {
    htmlBuilder.addChild('li', name);
}
let htmlElement = htmlBuilder.build();
console.log(htmlElement.toString());

htmlBuilder.clear();

// fluent builder allowing method chaining
htmlBuilder
    .addChild('li', names[0])
    .addChild('li', names[1])
    .addChild('li', names[2]);
console.log(htmlBuilder.toString());
