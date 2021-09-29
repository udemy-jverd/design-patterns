class Pizza {
    constructor(temperature) {
        this.temperature = temperature;
    }

    bake() {
        console.log('bake');
    }

    cut() {
        console.log('cut');
    }

    box() {
        console.log('box');
    }
}

class CheesePizza extends Pizza {
    constructor(pizza) {
        super(pizza);
    }

    prepare() {
        console.log('prepare cheese');
    }
}

class VeganPizza extends Pizza {
    constructor(pizza) {
        super(pizza);
    }

    prepare() {
        console.log('prepare vegan');
    }
}

class SimplePizzaFactory {
    static order(type) {
        const temperature = 230;
        let pizza = null;
        if (type === 'vegan') {
            pizza = new VeganPizza(temperature);
        }
        if (type === 'cheese') {
            pizza = new CheesePizza(temperature);
        }
        return pizza;
    }
}

const pizza = SimplePizzaFactory.order('vegan');
pizza.prepare();
pizza.bake();
pizza.cut();
pizza.box();
