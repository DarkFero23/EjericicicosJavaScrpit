//console.log("Ejercicio 3");

function isEven(num) {
    return (num % 2 == 0);
}

function find(arr, f) {
    var res = [];
    for (let i = 0; i < arr.length; i++) {
        if (f(arr[i])) {
            res.push(arr[i]);
        }
    }
    return res;
}

//console.log(isEven(3)) // false
//console.log(isEven(4)) // true
result = find([1, 3, 5, 4, 2], isEven);
//console.log("find result:", result); // [4, 2]