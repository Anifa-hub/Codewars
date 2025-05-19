function getLargerNumbers(a, b) {
return a.map((v,i,arr)=>arr[i]>b[i]?arr[i]:b[i]);
​
}