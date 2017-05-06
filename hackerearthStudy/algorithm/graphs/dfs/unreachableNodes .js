/**
 * Created by jeremias on 5/3/2017.
 */

`
Problem: Unreachable Nodes
https://www.hackerearth.com/practice/algorithms/graphs/depth-first-search/tutorial/#c97014

--------
Instead of Array.includes(x) .... 
I needed to use: 
    Array.indexOf(x){
        return -1 did not find
        return the position
    }


`;
function dfs(L,s) {
    visited.push(s);
    for (var i = 0; i<L[s].length ;i++){
        if(visited.indexOf(L[s][i])===-1){
            dfs(L,L[s][i],visited);
        }
    }
}


function main(input) {
    //Enter your code here
    var arr = input.split('\n');
    var nodes = arr[0].split(' ').map(Number)[0];
    var edges = arr[0].split(' ').map(Number)[1];
    var slice = arr.slice(1,edges+1);
    var root = parseInt(arr.slice(edges+1)[0]);
    //console.log(arr, nodes, edges, slice, root);

    var L = [];
    for (i=0;i<nodes+2;i++){
        L[i] = [];
    }


    for(var i in slice){
        var edge = slice[i].split(' ').map(Number);
        var from = edge[0];
        var to = edge[1];

        L[from].push(to);
        L[to].push(from);
    }

    //console.log(L);
    visited=[];
    dfs(L,root);
    //console.log(visited);
    console.log(nodes - visited.length);
}


process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = `10 10
8 1
8 3
7 4
7 5
2 6
10 7
2 8
10 9
2 10
5 10
2`;

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

main(stdin_input);

var n = `      #
     ##
    ###
   ####
  #####
 ######`;