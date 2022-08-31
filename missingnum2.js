let A = [22, 23, 25, 26, 21, 25];
let total = 0;

// sort the array.
A = A.sort(function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})

for(let i = 0; i < A.length; i++){
    if (A[i] == A[i+1]){
        A.splice(A[i-1],1);
    }
}

for(let j = 0; j<A.length; j++){
    if(A[j]+1 != A[j+1]){
        total = A[j]+1
        break;

    }
}

if(A[0] < 0){
    total = 1;
}

console.log(total)