let word = "BlAck"
let correct = false;


// Detect if first letter is capital
if(word.charAt(0,1) === word.charAt(0,1).toUpperCase()){
    // if second letter is lowercase, check to see if the rest of the word is lowercase.
    if(word.charAt(1,2) === word.charAt(1,2).toLowerCase()){
        if(word.substring(1,word.length) === word.substring(1,word.length).toLowerCase()){
            correct = true;
        }
    }
    //if the second letter is uppercase, check to see if the whole word is uppercase.
    if(word.charAt(1,2) === word.charAt(1,2).toUpperCase()){
            if(word.substring(1,word.length) === word.substring(1,word.length).toUpperCase()){
                correct = true;
            }
        }
    }

//if it's not capital, check to see if the whole word is lowercase
if(word.charAt(0,1) === word.charAt(0,1).toLowerCase()){
    if(word === word.toLowerCase()){
        correct = true;
    }
}

console.log(correct)