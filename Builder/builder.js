// const Tag = require('./Tag');
const words = ['hello', 'world'];

class Tag {
    static indentSize = 2;

    constructor(name = '', text = '') {
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImpl(indent) {
        let html = [];
        let i = ' '.repeat(indent * Tag.indentSize);
        html.push(`${i}<${this.name}>\n`);
        if (this.text.length > 0) {
            html.push(' '.repeat(Tag.indentSize * (indent + 1)));
            html.push(this.text);
            html.push('\n');
        }

        for (let child of this.children) {
            html.push(child.toStringImpl(indent + 1));
        }
        html.push(`${i}</${this.name}>\n`);
        return html.join('');
    }

    toString() {
        return this.toStringImpl(0);
    }

    static create(name) {
        return new HTMLBuilder(name);
    }
}

class HTMLBuilder {
    constructor(rootName) {
        this.root = new Tag(rootName);
        this.rootName = rootName;
    }

    // non-fluent
    addChild(childName, childText) {
        let child = new Tag(childName, childText);
        this.root.children.push(child);
    }

    // fluent
    addChildFluent(childName, childText) {
        let child = new Tag(childName, childText);
        this.root.children.push(child);
        return this;
    }

    toString() {
        return this.root.toString();
    }

    clear() {
        this.root = new Tag(this.rootName);
    }

    build() {
        return this.root;
    }
}


// ordinary non-fluent builder
let builder = Tag.create('ul');
for (let word of words) {
    builder.addChild('li', word);
}
let tag = builder.build();
console.log(tag.toString());

// fluent builder
builder.clear();
builder
    .addChildFluent('li', 'bobby')
    .addChildFluent('li', 'charlie')
    .addChildFluent('li', 'lily');
console.log(builder.toString());
