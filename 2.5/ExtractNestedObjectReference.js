/*
You are given a complex object that has many deeply nested variables.
 You don't want to go the usual if obj.property == null route. 
 Create a prototype method that given a nested path, either return the value or undefined.
 */
Object.prototype.hash = function(string) {
    try{
      return eval(`this.${string}`)
    }
    catch(a){
      return undefined
  }
  }