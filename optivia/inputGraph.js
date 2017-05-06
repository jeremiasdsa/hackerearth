/**
 * Created by jeremias on 5/4/2017.
 */

/**
 E1                 More than 2 children
 E2                 Duplicate Edges
 E3                 Cycle present
 E4                 Multiple roots
 E5                 Any other error
 *
 * */

var input = `(A,B) (A,C) (B,G) (C,H) (E,F) (B,D) (C,E) (A,B) (A,H)`;
var node = {};

node['A'] = [1,2,3,2];

node['A'].push(4);
console.log(node);
var set = new Set(node['A']);
console.log(set);


function processData(input){

    var array_input = input.split(' ');

    console.log(array_input);

    var ERRORS = [];
    var nodes = new Set();
    var adj = {};

    var duplicateEdges = [];


    for(var i in array_input){
        var from = array_input[i][1];
        var to = array_input[i][3];

        nodes.add(from);
        nodes.add(to);

        if(duplicateEdges.includes(array_input[i])){
            console.log("******  E2:- Duplicate Edges  ******")
            ERRORS[2] = "E2";
        }
        duplicateEdges.push(array_input[i]);

        try {
            if(adj[from].includes(to)){
                //ERRORS[2] = "E2 "+ from;
            }
            adj[from].push(to);

            var set = new Set(adj[from]);
            console.log("SET",set, set.size);
            if(set.size>3){
                ERRORS[1] = "E1";
            }


        }catch (e){
            adj[from] = [];
            adj[from].push(to);
        }


        // binary tree, don't need to add theses edges
        // try {
        //     if(adj[to].includes(from)){
        //         //ERRORS[2] = "E2";
        //     }
        //     adj[to].push(from);
        //
        //     var set = new Set(adj[to]);
        //     console.log("SET",set, set.size);
        //     if(set.size>3){
        //         ERRORS[1] = "E1";
        //     }
        // }catch (e){
        //     adj[to] = [];
        //     adj[to].push(from);
        // }
        //



    }

    console.log(nodes);
    console.log(adj);
    console.log(ERRORS);
    return adj;
}

var G = processData(input);

function runDfs(G,v) {
    var visited = [];

    dfs = function (G,v) {
        visited.push(v);
        console.log(visited);
        for (var i in G[v]){
            var sett = new Set(G[v]);
            console.log(sett, sett.size>3);
            console.log(G[v]);
            if(sett.size > 3){
                console.log("******  E1:- More than 2 children different nodes  ******")
            }

            if(!visited.includes(G[v][i])  ){
                dfs(G,G[v][i]);
            }
        }
    };
    dfs(G,v);
    console.log(visited);
}

runDfs(G,'A');