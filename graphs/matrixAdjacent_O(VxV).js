/**
 * Created by jeremias on 5/1/2017.
 */


//https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/

function matrixEmpty(numberNodes) {
    var n = numberNodes;
    var G= Array(n).fill([]);

    for (i in G){
        G[i] = Array(n).fill(0);
    }
    console.log(G);
    return G;
}

var input = `1 2
2 4
3 1
3 4
4 2`;

function matrixFill(input, G){

    arr = input.split('\n');

    for (i=0;i<arr.length;i++){

        xy = arr[i].split(' ').map(Number);

        x=xy[0];
        y=xy[1];

        G[x-1][y-1]=1;
        G[y-1][x-1]=1;//bidirected

    }


    //console.log(G);
    return G;
}

var G = matrixEmpty(10)

console.log(matrixFill(input,G));

function thereIsConnection(a,b, G) {
    console.log(G[a-1][b-1]);
    return G[a][b];
}

thereIsConnection(2,4, matrixFill(input,G));