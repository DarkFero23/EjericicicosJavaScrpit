function mymap_recursive(arr, f) { //console.log(arr)

   let res = [];
   if (Array.isArray(arr) && arr.length > 0) {

       res[0] = f(arr[0]);
       arr.shift();

       return res.concat(mymap_recursive(arr, f));
   } else {
       return res;
   }
}

result1 = mymap_recursive([1, 2, 3, 4, 5], square);
result2 = mymap_recursive([1, 4, 9, 16, 25], Math.sqrt);
console.log("mymap_recursive  result 1:", result1);
console.log("mymap_recursive  result 1:", result2);