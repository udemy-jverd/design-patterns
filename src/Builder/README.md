# Builder

## Motivation
- Some objects are simple an can be created in a single initializer call.
- Other objects require a lot of ceremony to create.
- Having an object with 10 initializer arguments is not productive.
- Instead, opt for piecewise construction.
- Builder provide an API for constructing an object step-by-strep.

## Definition
**Builder**: When piecewise object construction is complicated, provide an API for doing it succinctly. 

## Summary
- A builder is a separate class for building an object.
- Can create a builder by calling static function (that returns a new builder) from the object or directly via the builder.
- To make fluent builder (allowing methods chaining), returns `this` at the end of every method.
- Different facets of an object can be built with different builders working in tandem via a base class.
