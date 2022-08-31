let A = [22, 23, 25, 26, 21, 25];
let N = A.length; 
let total = 0;

// sort the array.
A = A.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})

//run through the array, get rid of any duplicate numbers
for(let i = 0; i < N; i++){
    if (A[i] == A[i+1]){
        A.splice(A[i-1],1);
        N--;
    }
}

//calculate the total;
total = Math.floor((N+1)*(N+2)/2);
//subtract all numbers from array. 
for(let j = 0; j < N; j++){
    total -= A[j];
}

if(A[0] < 0){
    total = 1;
}

if(N.length == 1){
    total = 0;
}
console.log(total);