//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords() {
    for (let i = 0; i < dog_names.length; i++) {
      if (dog_string.toLowerCase().includes(dog_names[i].toLowerCase())) {
        console.log(`Matched ${dog_names[i]}`);
      } else {
        console.log("No Match");
      }
    }
  }
  
  console.log(findWords(dog_names));

//Call method here with parameters

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
        for (let i = 0; i < arr.length; i++) {
          if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
          }
        }
      }
replaceEvens(arr);
console.log(arr);

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Do two code war problems in java instead of python
https://www.codewars.com/kata/5558cc216a7a231ac9000022

function duplicates(arr2) {
    let seen = []
    let dups = []
    
    for(let char of arr2){
      if(!seen.includes(char)){
        seen.push(char);
      }else if(!dups.includes(char)){
        dups.push(char);
      }
    }
    return dups;
  }

https://www.codewars.com/kata/5a2be17aee1aaefe2a000151

function arrayPlusArray(arr1, arr2) {
    return sum(arr1) + sum(arr2);
  }
  
  function sum(array) {
    return array.reduce((total, num) => total + num, 0);
  }
  