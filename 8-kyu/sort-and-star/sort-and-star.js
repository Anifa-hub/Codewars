function twoSort(s) {
return s.sort()[0].split('').map((a,i,p)=> p .length-1 !== i ? `${a}***` : a ).join('')
}