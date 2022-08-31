let Nums = [3, 8, 9, 7, 6]
let K = 3;


// get the amount of turns, and turn it until K runs out of turns
while(K > 0){
// Push the last number of the array to the beginning.
 for(i = 1; i > 0; i--){
    Nums.unshift(Nums[Nums.length-1])

    //then push out the last number of the array. 
    Nums.pop(Nums.length-1);
    
    //take one turn away.
    K--
   
 }

console.log(Nums)
}

