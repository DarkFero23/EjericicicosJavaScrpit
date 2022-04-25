function mymap(arr , f){
    for(let i = 0; i < arr.length; i++){
      arr[i] = f(arr[i]);
    }
    return arr;
  }
  result1 = mymap ([1 , 2 , 3 , 4, 5] , square );
  result2 = mymap ([1 , 4 , 9 , 16 , 25] , Math.sqrt );
  console.log(" result1 :", result1 ); // [1 , 4, 9, 16 , 25]
  console.log(" result2 :", result2 ); // [1 , 2, 3, 4, 5]