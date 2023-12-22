let a = 0

let fname = "mark"
let male = true;


if ( male == true){
  console.log(fname + " is male="+ male);
} 
else {
  console.log(fname + " is not male");
}

/*for (let i=0;i<100;i++){
  a = a+i;
  console.log(a)
}
console.log(a)*/
let max = -Infinity
const ages = [12,13,4,56,7];

let reversearr=[]

for (let i=ages.length-1;i>=0;i--){

  /*if (ages[i] > max){
    max = ages[i]
  }*/
  
  reversearr.push(ages[i]);
  
  if ( ages[i] %2 ==0){
    console.log(ages[i])
  }
  
}
console.log(reversearr)
//console.log(max)

function maint(a,b,fntocall){

  const ans = fntocall(a,b);

  return ans;
}

function sum(a,b){

  return a+b;


}

console.log(maint(1,2,sum)); //callback

function largestNumber(numbers) {
  
  var largest = numbers[0];

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest ) {
      largest = numbers[i];
    }
  }
  return largest;
}

// Example usage:
const numbersArray = [3, 7, 2, 8, 5];
const result = largestNumber(numbersArray);
console.log("The largest number is:" + result);