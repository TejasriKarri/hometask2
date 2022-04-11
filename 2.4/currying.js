/*
We want to create a function that will add numbers together when called in succession.

add(1)(2); // == 3
 */
function add(n){
    var f= function(b){
      return add(n+b);
    };
    f.valueOf=function(){
  return n;
    };
    return f;
    // Let the currying begin!
  }