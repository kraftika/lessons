* All functions in JavaScript have properties, just as objects have properties. And when a function executes, it gets the this property—a variable with the value of the object that invokes the function where this is used.

* The this reference **ALWAYS refers to (and holds the value of) an object**—a singular object—and it is usually used inside a function or a method, although it can be used outside a function in the global scope.


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
####When this is most misunderstood and becomes tricky

The this keyword is most misunderstood:
* when we borrow a method that uses this
* when we assign a method that uses this to a variable
* when a function that uses this is passed as a callback function
* when this is used inside a closure—an inner function.

#####Context

```javascript
var person = {
   firstName   :"Penelope",
   lastName    :"Barrymore",

   showFullName:function () {
​     // The "context"​
      console.log (this.firstName + " " + this.lastName);
    }
}
​
​// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.​
​// And the use of "this" inside the showFullName() method has the value of the person object,​

person.showFullName (); // Penelope Barrymore​
​
​// If we invoke showFullName with a different object:​
​var anotherPerson = {
  firstName   :"Rohit",
  lastName    :"Khan"​
};
​
​// We can use the apply method to set the "this" value explicitly—more on the apply () method later.​
​// "this" gets the value of whichever object invokes the "this" Function, hence:​
person.showFullName.apply (anotherPerson); // Rohit Khan​
​
​// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method​
```

1. Fix this when used in a method passed as a callback

