/**
 * Created by jeremias on 4/30/2017.
 */

var arr =
   [[1,2,3,4,5,6],
    [1,9,9,9,9,1],
    [1,0,0,0,0,1],
    [1,0,0,0,0,1],
    [1,0,0,0,0,1],
    [1,2,3,4,5,1]];

max = -200;
for (i=1 ;i< arr.length-1;i++){
    for(j=1; j<arr[0].length-1;j++){
            a = arr[i-1][j-1];
            b = arr[i-1][j];
            c = arr[i-1][j+1];

            d = arr[i][j];

            e = arr[i+1][j-1];
            f = arr[i+1][j];
            g = arr[i+1][j+1];

            sum = (a+b+c+d+e+f+g);
            if(sum>max){
                max = sum
            }
        }
}
console.log(max);
function cal(i,j, array) {


    meio = array[i][j];

    array[i-1][j-1];
    array[i-1][j];
    array[i-1][j+1];

    array[i][j];

    array[i+1][j-1];
    array[i+1][j];
    array[i+1][j+1];
}
var arra=[];

var s = "asdf";
var t = '0'.repeat(4).split('').map(Number);
console.log(s)
console.log(t)
