/**
 * Created by jeremias on 5/3/2017.
 */



var input = `6
4
1 2
2 3
1 3
4 5`;

var arr = input.split('\n');
var size = parseInt(arr[0]);
var slice = arr.slice(2);
console.log(slice);

var L = [];
for (i=0;i<size+1;i++){
    L[i] = [];
}


for(var i in slice){
    var edge = slice[i].split(' ').map(Number);
    console.log(edge);
    var from = edge[0];
    var to = edge[1];

    L[from].push(to);
    L[to].push(from);
}

 console.log(L);

var visited=[];
function dfs(L,s) {
    visited.push(s);
    for (var i = 0; i<L[s].length ;i++){
        if(!visited.includes(L[s][i])){
            dfs(L,L[s][i]);
        }
    }
}

for(var i=1;i<size;i++){
    visited=[];
    dfs(L,i);

    console.log(visited);

}
// for(var i in G){
//
//     var line = G[i].split(' ').map(Number);
//     // console.log(line);
//     from = line[0]
//     to = line[1];
//     L[from].push(to);
//     L[to].push(from);
// }