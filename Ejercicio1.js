//console.log("Ejercicio 1");

function square(x) { return (x * x); }

function double(x) { return (x * 2); }

function composedValue(square, double, x) {
    var compoose = R.compose(square, double);
    return compoose(x);
}
//console.log(composedValue(square, double, 3)); // 36