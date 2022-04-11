/*
In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. 
The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.
*/
var Cat = (function () {
    const cats = []
  
    const constructor = function (name, weight) {
      if (!name || !weight) throw Error('invalid parameters')
      Object.defineProperty(this, 'name', { get: () => name })
      Object.defineProperty(this, 'weight', { get: () => weight, set: value => weight = value })
      cats.push(this)
    }
  
    constructor.averageWeight =() => cats.reduce((acc, cat) => (acc + cat.weight), 0) / cats.length
  
    return constructor
  }())