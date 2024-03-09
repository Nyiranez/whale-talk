const input = "turpentine and turtles";
const vowels = ["a", "e", "o", "u", "i"];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
        if (input[i] === vowels[j]) {
            
            resultArray.push(input[i]);
            
            resultArray.push("u");
        }
       
       
    }
   
} 


resultArray.push("e");

console.log(resultArray);

let  resultString= resultArray.join('').toUpperCase();
   

 console.log(resultString);