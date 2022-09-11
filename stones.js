const piles = [3,7,2,3]
let Alice = 0;
let Bob = 0;
let turn = 1;

// if turn is 1, it's alice's turn, if turn is 2, it's Bob's turn. 
while(piles.length !== 0){
let coin = Math.floor(Math.random() * 2) + 1;
    
    if(turn == 1){
    // add the chosen pile to Alice's score. 
    // if coin is "heads" = 0, it's the first pile. If coin is "tails" = 1, it's the last. 
        if(coin == 1){
            Alice+= piles[0]; 
            turn++;
            piles.shift();
        }
        
        if(coin == 2){
            Alice+= piles[piles.length-1];
            turn++;
            piles.pop();
        }

    }
    if(turn == 2){
        if(coin == 1){
            Bob+= piles[0]; 
            turn--;
            piles.shift();
        }
        
        if(coin == 2){
            Bob+= piles[piles.length-1];
            turn--;
            piles.pop();
        }

    }
}
console.log(Alice);
console.log(Bob)
if(Alice > Bob){
    return true;
}
if(Alice < Bob){
    return false;
}