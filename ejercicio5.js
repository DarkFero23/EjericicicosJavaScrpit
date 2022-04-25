function find_recursive(arr, f) { //console.log(arr)

    let res = [];
    if (Array.isArray(arr) && arr.length > 0) {

        if (f(arr[0])) {
            res[0] = arr[0];
        }
        arr.shift();

        return res.concat(find_recursive(arr, f));
    } else {
        return res;
    }
}

result = find_recursive([1, 3, 5, 4, 2], isEven);
//console.log("resuld find_recursive : ", result); // [4, 2]


