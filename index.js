function takesInteger (num) {
    let numRange = []; //empty array to hold numbers
    //looping through the array and checking conditons
for (let i = 1; numRange.length< num;
    i++){
        if (i%2 === 0 && i%3 === 0 && i%5 === 0){
            numRange.push('yu-gi-oh');
        }else if (i%2 === 0 && i%3 === 0){
            numRange.push('yu-gi');
        }else if (i%2 === 0 && i%5 === 0){
            numRange.push('yu-oh');
        }else if (i%3 === 0 && i%5 === 0){
            numRange.push('gi-oh');
        }else if (i%2 === 0){
            numRange.push('yu');
        }else if (i%3 === 0){
            numRange.push('gi');
        }else if (i%5 === 0){
            numRange.push('oh');
        }else {
            numRange.push(i);
        }
    } console.log(numRange); //display array
    return numRange; //return array containing numbers from 1 to said argument
}
takesInteger(100); //call function with 100
takesInteger(7); //calls function with 7
takesInteger(25); //calls funtion with 25