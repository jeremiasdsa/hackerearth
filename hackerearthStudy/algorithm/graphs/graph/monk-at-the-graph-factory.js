/**
 * Created by jeremias on 5/1/2017.
 */
//https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/monk-at-the-graph-factory/

function main(input) {
    //Enter your code here
    `
    Probem: https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/monk-in-the-real-estate/
    
    For a graph with n Vertices it is a tree if it has n-1 Edges.
    ---------
    V = n
    E = n-1
    ---------
    Degree :http://mathinsight.org/definition/node_degree
    out-degree - n of edges comming out of a V.
    in-degree -n of edges comming in a V.
    Total degree = in+out(degree)
    ----------
    So for a tree bidirected totalDegree = 2xE = 2*(n-1)
    `

    var n = input.split('\n')[0];
    var arr = input.split('\n')[1].split(' ').map(Number);

    var sum = 0;

    //if the sum of all degreen = 2*Edges it is a tree.
    for(i in arr){
        sum = sum+arr[i];
    }


    if(sum==2*(n-1)){
        console.log("Yes");
    }else{
        console.log("No");
    }

}

process.stdin.resume();
process.stdin.setEncoding("utf-8");
var stdin_input = "";

process.stdin.on("data", function (input) {
    stdin_input += input;
});

process.stdin.on("end", function () {
    main(stdin_input);
});

