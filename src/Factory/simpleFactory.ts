interface IPizza {
  bake: () => void;
  cut: () => void;
  box: () => void;
  prepare: () => void;
}

class Pizza {
  protected temperature: number;

  constructor(temperature: number) {
    this.temperature = temperature;
  }

  public bake() {
    console.log('bake');
  }

  public cut() {
    console.log('cut');
  }

  public box() {
    console.log('box');
  }

  public prepare() {}
}

class CheesePizza extends Pizza implements IPizza {
  constructor(temperature: number) {
    super(temperature);
  }

  public prepare() {
    console.log('prepare cheese');
  }
}

class VeganPizza extends Pizza implements IPizza {
  constructor(temperature: number) {
    super(temperature);
  }

  public prepare() {
    console.log('prepare vegan');
  }
}

class SimplePizzaFactory {
  static order(type: string): Pizza {
    const temperature = 230;
    let pizza = new CheesePizza(temperature);
    if (type === 'vegan') {
      pizza = new VeganPizza(temperature);
    }
    return pizza;
  }
}

export default SimplePizzaFactory;
