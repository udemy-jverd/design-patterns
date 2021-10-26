import HTMLBuilder from './Builder/builder.js';
import PersonBuilder from './Builder/subBuilders.js';
import SimplePizzaFactory from './Factory/simpleFactory.js';
import PointFactory from './Factory/factoryMethod.js';

// BUILDER
const htmlElement = new HTMLBuilder('ul')
  .withChild('li', 'Shenzi')
  .withChild('li', 'Banzai')
  .withChild('li', 'Ed')
  .build();
console.log(htmlElement);

// BUILDER WITH SUB BUILDERS
const person = new PersonBuilder()
  .adressBuilder().withStreet('123 London Road').withCity('London')
  .withPostcode('SW12BC')
  .jobBuilder()
  .withCompany('Fabrikam')
  .withPosition('Engineer')
  .withIncome(123000)
  .build();
console.log(person);

// SIMPLE FACTORY
const pizza = SimplePizzaFactory.order('vegan');
pizza.prepare();
pizza.bake();
pizza.cut();
pizza.box();

// FACTORY METHOD
const p1 = PointFactory.newPolarPoint(5, Math.PI / 2);
console.log(p1);
const p2 = PointFactory.newCartesianPoint(2, 3);
console.log(p2);
