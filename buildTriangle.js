/*
 * Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}
// input for triangle, calling makeLine

function buildTriangle(height) {
    var starTriangle = "";
    for (var k = 1; k <= height; k++) {
        starTriangle += makeLine(k);
    }
    return starTriangle;
}

// test your code by uncommenting the following line
console.log(buildTriangle(20));
