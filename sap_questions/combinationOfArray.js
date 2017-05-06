/**
 * Created by jeremias on 5/3/2017.
 */
`
https://codereview.stackexchange.com/questions/7001/generating-all-combinations-of-an-array

`;

var letters = ["a", "b", "c", "d"];
var combi = [];
var temp= "";
var letLen = Math.pow(2, letters.length);

for (var i = 0; i < letLen ; i++){
    temp= "";
    for (var j=0;j<letters.length;j++) {
        if ((i & Math.pow(2,j))){
            temp += letters[j]
        }
    }
    if (temp !== "") {
        combi.push(temp);
    }
}

console.log(combi.sort(function (a,b) {
    return a.localeCompare(b);
}).join("\n"));

// RECURSIVE VERSION

function combinations(str) {
    var fn = function(active, rest, a) {
        if (!active && !rest)
            return;
        if (!rest) {
            a.push(active);
        } else {
            fn(active + rest[0], rest.slice(1), a);
            fn(active, rest.slice(1), a);
        }
        return a;
    }
    return fn("", str, []);
}

//another recursive Version
function getCombinations(chars) {
    var result = [];
    var f = function(prefix, chars) {
        for (var i = 0; i < chars.length; i++) {
            result.push(prefix + chars[i]);
            f(prefix + chars[i], chars.slice(i + 1));
        }
    }
    f('', chars);
    return result;
}

console.log(getCombinations(letters));


//

function getSubArrays(arr){
    var len = arr.length,
        subs = Array(Math.pow(2,len)).fill();
    return subs.map((_,i) => { var j = -1,
        k = i,
        res = [];
        while (++j < len ) {
            k & 1 && res.push(parseInt(arr[j]));
            k = k >> 1;
        }
        return res;
    }).slice(1);
}

console.log(JSON.stringify(getSubArrays(["1","2","3","4"])));


function getSubArraysS(arr,S){
    var temp =[];
    var len = arr.length,
        subs = Array(Math.pow(2,len)).fill();
    var array = subs.map((_,i) => { var j = -1,
        k = i,
        res = [];
        while (++j < len ) {
            k & 1 && res.push(parseInt(arr[j]));
            k = k >> 1;

        }
        return res;
    }).slice(1);

    var pos = [];
    for(var e=0;e<array.length;e++){
        var soma = 0;
        for(var t=0;t<array[e].length;t++){
            soma = soma + array[e][t];
        }
        if(soma <= S){
            pos.push(e);
        }
    }

    var maiorLengh=0;
    console.log(pos);
    for(var i =0;i<pos.length;i++){
        console.log(array[pos[i]]);
        if(array[pos[i]].length>maiorLengh){
            maiorLengh = array[pos[i]].length;
            console.log("escolhido",array[pos[i]]);
        }
    }
    console.log(maiorLengh);
}

getSubArraysS(["1","2","3","4"],4);