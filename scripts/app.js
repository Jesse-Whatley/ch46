function sayHello (name, lastName){
    console.log("Hello " + name + " " + lastName);
}

function sum (num1, num2){
    const res = num1 + num2;
    return res;
}

/**
 * ! = not
 * && = and
 * || = or
 */

function init () {
    console.log("Hello World!");
    const name = "Jesse";
    sayHello(name, "Phillips");
    const result = sum(-2678, 21894);
    console.log(result);
        // retrive data
        // hook events
}



window.onload = init;