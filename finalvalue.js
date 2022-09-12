var finalValueAfterOperations = function(operations) {
let total = 0;

for(let a = 0; a < operations.length; a++){
        if(operations[a] == "X++" || operations[a] ==  "++X"){
            total++;
        }

        if(operations[a] == "X--" || operations[a] == "--X"){
            total--
        }
    };
}
console.log(total);
return total;