var heightChecker = function(heights) {
let count = 0;
let expected = []

//duplicate array
for(let i = 0; i < heights.length; i++){
    expected[i] = heights[i]
}

//sort the heights
expected.sort( function(a,b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
})

//check the heights by expected.
for(let a = 0; a < heights.length; a++){
    if(heights[a] !== expected[a]){
        count++;
    }
}

return count;
};