function WordLength(s){
let trim = s.trim();
let array = trim.split("");
let count = 0;


// cycle through the array from right to left 
for(let a = array.length - 1; a >= 0; a--){
    // have the count for every letter.
    if(array[a] != " "){
        count++;
        console.log(count)
    }
    if(array[a] == " "){
        break;
        }
    }
}
