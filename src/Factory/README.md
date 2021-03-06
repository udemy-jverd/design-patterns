# Factories

## Motivation

- Object creation logic becomes too convoluted.
- Initializer is not descriptive.
- Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to:
  1. A separate method (Factory method),
  2. That may exist in a separate class (Factory),
  3. Create hierarchy of factories (Asbtract Factory).

## Definition

**Factory**: A component responsible solely for the wholsale (not piecewise) creation of objects.

## Differences

- Simple factory is usefull when we have to instantiate an object we don't know from the logic part. It is the Factory class which will contains the logic of objects creation.
- Factory method is a more elegant way to delegate the creation of similar objects to a unique class: the Factory one.
