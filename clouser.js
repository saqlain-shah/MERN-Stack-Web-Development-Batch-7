// Of course! A closure in JavaScript is a powerful and often-used concept. It occurs when a 
// function is defined within another function (the outer function), and the inner function has access 
// to the variables and parameters of the outer function, 
// even after the outer function has finished executing.

function outerFunction() {
    var outerVariable = 'I am from the outer function';

    function innerFunction() {
        console.log(`i can access my parernt variable ${outerVariable}`); // Inner function can access outerVariable
    }

    // Call the inner function
    innerFunction();
}

outerFunction();
