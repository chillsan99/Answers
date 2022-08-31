function DistinctCount(array){
let count = 1;


//sort the array 
array.sort(function( a ,b ){
    if (a > b ) return 1;
    if (a < b ) return -1;
    return 0;
})


//window slide to count all the different numbers. 
for(a = 0; a < array.length-1; a++){
    if(array[a] != array[a+1]){
        count++;
    }
}

// if there is nothing, the count will be zero.
if(array.length == 0){
    count = 0;
}

return count;

}