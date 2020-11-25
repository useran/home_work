let s1='';
let s2='';
for (let i=2; i<14; i=i+2){
    s1=`${s1} ${i}`;
}
for (let j=33; j<45; j=j+2){
    s2=`${s2} ${j}`;
}
console.log(`${s1}${s2}`);
let arr=[];
let arr2=[];
let n=9992100;
let mynumber=9991999;
let firstNum=0;
let secondNum=0;
number:
for (let i = 9990100; i < n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j === 0) continue number;
  }
  arr.push(i);
}
for (let i=0; i<arr.length; i++){
    arr2.push(Math.abs(arr[i]-mynumber));
}
let min = arr2[0];
let index = 0;
for (let i=0; i<arr.length; i++){
  if (arr2[i] < min) {
    min = arr2[i];
    index = i;
  }
}
firstNum=arr[index];
if (arr2[index-1]>arr2[index+1]){
    secondNum=arr[index+1];
} else secondNum=arr[index-1];

console.log(firstNum,secondNum);