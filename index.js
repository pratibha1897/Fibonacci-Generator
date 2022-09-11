// Using Array

// function fibonacciGenerator(n){
// var output = [];
//     if(n === 0){
//        output = []; 
//     }
//     else if(n===1){
//         output = [0];
//     }
//     else if(n===2){
//         output = [0,1];
//     } 
//     else
//     {
//         output = [0,1];
//     for (var i = 2; i < n; i++){
//         output.push([output.length - 2] + [output.length - 1]);
//     }
// }

//     return output;
// }

// output = fibonacciGenerator(-1);
//     console.log(output);





// Without using Array

var n = parseInt(prompt("Enter fibonacci length : "));

var a = 0;
var b = 1;

document.write(a + ", " + b);

for (i=1;i<=n;i++){
    var temp = a+b;
    a = b;
    b = temp;
    document.write(", " + temp);
}


