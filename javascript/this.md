* All functions in JavaScript have properties, just as objects have properties. And when a function executes, it gets the this property—a variable with the value of the object that invokes the function where this is used.

*The this reference **ALWAYS refers to (and holds the value of) an object**—a singular object—and it is usually used inside a function or a method, although it can be used outside a function in the global scope.

**this is not assigned a value until an object invokes the function where this is defined.**

```javascript
var firstName = "Peter",
    lastName = "Ally";
​
function showFullName () {
  // "this" inside this function will have the value of the window object​
  // because the showFullName () function is defined in the global scope, just like the firstName and lastName​
  console.log (this.firstName + " " + this.lastName);
}
​
var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",

    showFullName:function () {
    // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.​
    console.log (this.firstName + " " + this.lastName);
    }
}
​
showFullName (); // Peter Ally​
​
// window is the object that all global variables and functions are defined on, hence:​
window.showFullName (); // Peter Ally​
​
// "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:​
person.showFullName (); // Penelope Barrymore
```
