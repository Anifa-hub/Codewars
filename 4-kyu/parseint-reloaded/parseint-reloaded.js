 
function parseInt(number) { 
​
    // reference array for english -> integer
    var ref = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10, eleven:11, twelve:12, thirteen:13, fourteen:14, fifteen:15, sixteen:16, seventeen:17, eighteen:18, nineteen:19, twenty:20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety:90, hundred: 100, thousand: 1000, million: 1000000 };
​
    // regex to find number values from the string
    var find = new RegExp( "(one|t(wo|hree|en|welve|hirteen|wenty|hirty)|f(our|ive|ourteen|iftenn|orty|ifty)|s(ixteen|ixty|eventy|ix|even|eventeen|teen)|eigh(ty|t|teen)|nin(ety|e|eteen)|zero|hundred|thousand|million)", "gi" );
​
    // hundred/thousand/million etc. act as multipliers in this solution and need a seperate search
    var mult = new RegExp( "(hundred|thousand|million)", "gi" );
​
    number = number.split(' ').reverse().join(" ");
​
    value = 0; multiplier = 1;
    while( a = find.exec(number) ) {
​
        if( m = mult.exec(a[0]) ) {
​
            if( m[0] == 'hundred' ) { multiplier *= 100; }
            else { multiplier = ref[m[0]]; }
​
        }
        else {
​
            value += ref[a[0]] * multiplier;
​
        }
​
    }   
    return value;
}
  