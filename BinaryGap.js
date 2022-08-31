function LongestZero(N){
// turn the number to binary.
let binary = N.toString(2)
let array = binary.split("");
let count = 0;
let long = 0;
// run through the binary to count the zeros. 
for(let a = 0; a <= array.length; a++){
    if(array[a] === "0"){
      count++
// if anything else comes up, reset the count. 
    }else{
        count = 0;
        }
// Save the count if it's greater than the previous Gap. 
    if(count >= long){
        long = count;
    
        }
    }
// Check to see if there is no gap.
    if(long == array.length - 1){
        long = 0;
    }
}

return long;
