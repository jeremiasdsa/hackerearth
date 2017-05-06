/**
 * Created by jeremias on 5/1/2017.
 */

var input = `1 2
2 4
3 1
3 4
4 2`;



function adjEmpty(n) {
    var L = [];
    for (i=0;i<n;i++){
        L[i] = [];
    }
    console.log(L);
    return L;

}

function graph(input, L) {
    var G = input.split('\n').map(function(ele){return ele.split(' ').map(Number);});

    for(i in G){
        from = G[i][0]
        to = G[i][1];

        L[from-1].push(to);

    }
    console.log(L);
    return L;
}

//adjEmpty(4);
graph(input,adjEmpty(4));

function thereIsConnection(a,b,G) {

    console.log(G[a-1].includes(b));

    return G[a-1].includes(b);
}

thereIsConnection(2,4,graph(input,adjEmpty(4)));