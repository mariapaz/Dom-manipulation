function checkLength(str) {
  return (str.value.length > 5) ? true : false;
}

function checkLettercase(str) {
  let lowerCase;
  let upperCase;
  for (let i = 0; i < str.value.length; i++) {
    if (str.value[i] === str.value[i].toUpperCase()){
      upperCase = true;   
    }
    if (str.value[i] === str.value[i].toLowerCase()){
      lowerCase = true;   
    }
  }
 return upperCase && lowerCase ? true : false;
}

function checkTwoNum(str){
  let isNum = 0;
  for (let i = 0; i < str.value.length; i++) {
    // if ((typeof Number(str.value[i]) == 'number') && (Number(str.value[i]) == Number(str.value[i]))){
    if (!isNaN(Number(str.value[i]))){
      isNum += 1;
    console.log('is it a number? ' + Number(str.value[i]));
    }
  }
 // console.log('isNum: ' + isNum);
  return isNum >= 2 ? true : false;
}

let btn = document.getElementById("btn");
let input = document.getElementById("input");
let output = document.getElementById("output"); 

btn.addEventListener("click", function() {
  let myLength = checkLength(input);
  let myCheck = checkLettercase(input);
  let myNums = checkTwoNum(input);
  // console.log(myLength);
  // console.log(myCheck);
  // console.log(myNums);
  if ( myLength && myCheck && myNums ){
    output.innerHTML = "Okey";
  }else{
      output.innerHTML = "Won't work";
  }
});
// Gregor23 is a valid username- +5 chars,  1 uppercase 2 numbers
