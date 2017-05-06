/**
 * Created by jeremias on 5/2/2017.
 */

var G = [

    [ 0, 0, 1, 0 , 0, 0],
    [ 0, 0, 1, 0 , 0, 1],
    [ 1, 1, 0, 0 , 0, 1],
    [ 0, 0, 1, 0 , 0, 1],
    [ 1, 0, 1, 0 , 0, 1],
    [ 0, 1, 1, 1 , 1, 0],
];
var l=['A','B','C','D','E','F','G','H','I','J'];
console.log(G);

function DFS_iterative(G,root){
    var visited = [];
    var s = [];
    s.push(root);
    visited.push(root);

    console.log("Visited:",visited);
    console.log(s.length);
    while( s.length>0){

        v = s.pop();
        console.log("POPED",l[v],v);
        console.log("Stack:",s);

        console.log(G[v]);
        print(visited);
        for(var i=0;i<G[v].length;i++){
            console.log(G[v][i],G[v][i]===1);

            if(G[v][i]===1){

                if(!visited.includes(i)){
                    console.log(visited, "not include",l[i])
                    s.push(i);
                    console.log("Stack:",l[i],s);
                    visited.push(i);
                    console.log("Visited:",l[i],visited);
                }
            }
        }
    }
    console.log("VisitedOrder:",visited);
    var s ="";
    for(var i in visited){
        s+=l[visited[i]];
        //console.log(l[visited[i]]);
    }
    console.log(s);
}

DFS_iterative(G,3);

function print(visited){
    var s ="";
    for(var i in visited){
        s+=l[visited[i]];
        console.log(l[visited[i]]);
    }
    console.log(s);
}

console.log("RECURSIVE VERSION\n");

var visited_recursive = [];
console.log("VISITED:",visited_recursive);
function DFS_recursive(G,v){
    //console.log(v);
    visited_recursive.push(v);
    console.log("VISITED:",visited_recursive);
    for(var i=0;i<G[v].length;i++){
        if(G[v][i]===1){
            console.log(i);

            if(!visited_recursive.includes(i)){
                DFS_recursive(G,i);
                //visited_recursive.push(i);
            }
        }
    }
    //console.log("VISITED:",visited_recursive);
}

DFS_recursive(G,3);

console.log(visited_recursive);
