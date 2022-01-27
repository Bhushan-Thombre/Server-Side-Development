var rect = require('./rectangle');

function solveRectangle(l, b) {
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect(l, b, (err, rectangle) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }else {
            console.log("The area of the rectangle of dimensions of l = " + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions of l = " + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });

    console.log("This statement is after the call to rect()");
}

solveRectangle(2, 4);
solveRectangle(3, 5);
solveRectangle(0, 5);
solveRectangle(-3, 5);