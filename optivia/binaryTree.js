/**
 * Created by jeremias on 5/4/2017.
 */
/**
 *
 You are given a binary tree written as a sequence of parent-child pairs. You need to detect any erros which prevent the
 sequence from being a proper binary tree and print the highest priority error. If you detect no erros, print out the
 lexicographically smallest S-expression for the tree.

 Input Format
 Input is read from standard in put and has the following characteristics:
    * It is one line.
    * Leading or trailing whitespace is not allowed.
    * Each pair is formatted as an open parenthesis '('followed the parent, followed by a comma, followed by the child, followed by a closing parenthesis ')'. Exampe: (A,B).
    * All values are single, uppercase letters.
    * Parent-Child pairs are separated by a single space.
    * The sequence of pairs is not ordered in any specific way.

 Output
 Output is written to standart output and must have the following characteristics:
    * It is one line.
    * It constains no whitespace.
    * If erros are present, print out the first listed erros bellow(e.g: if E3 and E4 are present, print E3).
    * If no erros are present, print the S-expression representation descried bellow.

 Erros
 You should detect the following erros:

 Code                Type
 E1                 Invalid Input Format
 E2                 Duplicate Pair
 E3                 Parent Has More than Two Children
 E4                 Tree Contains Cycle
 E5                 Multiple Roots

 S-Expression Representation
 If the input is valid tree, we want you to print the lexicographically smallest S-Expression. "Lexicographically smallest" simply means "print the children in alphabetical order." Below is a recursive definition of what we want:
 S-exp(node) = '('node->val[S-exp(node->first_child)][S-exp(node->second_child)]')', if node!= NULL
             = '', if node == NULL
        where, first_child->val < second_child->val (lexicographically smaller)
 *
 * */

var inputs = ['(B,D) (D,E) (A,B) (C,F) (E,G) (A,C)',
'(A,B) (A,C) (B,D) (D,C)',
'(A,B) (A,C) (B,D) (E,F) (F,G) (F,H)',
'(A,B) (B,D) (B,C) (C,A)',
'(A,B) (B,C) (A,B) (A,C)',
'(A,B) (A,C) (A,D) (B,E)',
'(U,P) (O,L) (A,S) (N,O) (S,T) (U,M) (A,N) (S,U) (L,D)',
'(A,B) (B,C) (A,B)',
'(A,C) (A,B) (B,Q) (B,P) (C,D) (Q,Z) (Q,X)',
'(A,B)   (A,C) (B, E) (B,F)',
'(J,P) (J,O) (J,N) (J,P)',
'(X,Y) (R,D) (D,P) (R,A) (X,Z) (Z,T) (Z,B) (R,G)',
'(R,N) (U,T) (C,H) (Y,B) (R,A) (Y,C) (K,Y) (B,R) (H,E) (H,S) (K,U) (T,M)',
'(K,M) (P,L) (L,S) (Y,A) (T,P) (T,K) (L,E) (K,Y)',
'(A,B) (A,C (B,D) B,E)',
'    (P,B) (E,X) (P,D) (E,Y) (P,A)']

var outputs = [`(A(B(D(E(G))))(C(F)))
`,
`E4
`,
`E5`,
`E4
`,
`E2
`,
`E3
`,
`(A(N(O(L(D))))(S(T)(U(M)(P))))`,
`E2
`,
`(A(B(P)(Q(X)(Z)))(C(D)))
`,
`E1
`,
`E2
`,
`E3
`,
`(K(U(T(M)))(Y(B(R(A)(N)))(C(H(E)(S)))))`,
`(T(K(M)(Y(A)))(P(L(E)(S))))
`,
`E1
`,
`E1
`];


var input = `(A,B) (A,C) (B,G) (C,H) (E,F) (B,D) (C,E)`;

ERRORS = [];
ROOTS = [];

function processData(input){

    var array_input = input.split(' ');

    //console.log(array_input);


    var nodes_from = new Set();
    var nodes_to = new Set();
    var adj = {};
    var duplicateEdges = [];



    for(var i in array_input){
        if(array_input[i]===''){
            //console.log("******  E1:- Invalid Input Format  ******");
            ERRORS[1] = "E1";
            break;
        }else{
            if(array_input[i][0]!='(' || array_input[i][2]!=',' || array_input[i][4]!=')'){
                //console.log("******  E1:- Invalid Input Format  ******");
                ERRORS[1]="E1";
                break;
            }
        }

        var from = array_input[i][1];
        var to = array_input[i][3];

        nodes_from.add(from);
        nodes_to.add(to);

        if(duplicateEdges.includes(array_input[i])){
            //console.log("******  E2:- Duplicate Pair  ******");
            ERRORS[2] = "E2";
        }
        duplicateEdges.push(array_input[i]);

        try {

            adj[from].push(to);

            var set = new Set(adj[from]);
            //if my size of children is bigger than 2
            if(set.size>2){
                //console.log("******  E3:- Parent Has More than Two Children  ******");
                ERRORS[3] = "E3";
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
    //console.log("GRAPH",adj);
    sortingNodes(adj);
    //console.log("SORTED",adj);

    //console.log(nodes_from,nodes_to);
    multipleRoots(nodes_from, nodes_to); //E5
    //console.log("doing clicle with root",ROOTS);
    cicleDetect(adj,ROOTS[0]); //E4

    //console.log(ERRORS[1]===undefined);



    if(ERRORS.length===0){
        var s = printDfs(adj,ROOTS[0]);
        console.log(s);
        return s;

    }else{
        for(var e=1;e<ERRORS.length;e++){
            if(ERRORS[e]!=undefined) {
                console.log(ERRORS[e]);
                return ERRORS[e];
                break;
            }
        }
    }

    //ZERANDO
    ERRORS = [];
    ROOTS = [];

    //return adj;
}


function sortingNodes(G) {
    for(var i in G){
        G[i].sort(function (a,b) {
            return a.localeCompare(b);
        })
    }
}


function multipleRoots(nodes_from,nodes_to) {
    var nodes_f = Array.from(nodes_from);
    var nodes_t = Array.from(nodes_to);
    //console.log(nodes_f,nodes_t);

   for (var i in nodes_f){
       if(!nodes_t.includes(nodes_f[i])) {
            //console.log("******  E5:- Multiple Roots  ******");
            ROOTS.push(nodes_f[i]);
       }
   }
   if(ROOTS.length===0){
       //console.log("******  E4:- Tree Contains Cycle  ******");
       ERRORS[4] = "E4";
   }
   if(ROOTS.length>1) {
       //console.log("******  E5:- Multiple Roots  ******");
       ERRORS[5] = "E5";
   }
}


function cicleDetect(G,v) {
    var visited=[];

    dfsCicle = function (G,v) {
        visited.push(v);
        for(var e in G[v]){
            if(visited.includes(G[v][e])){
                //console.log("******  E4:- Tree Contains Cycle  ******");
                ERRORS[4] = "E4";
            }
            if(!visited.includes(G[v][e])){
                dfsCicle(G,G[v][e]);
            }
        }
    };
    dfsCicle(G,v);
}


function printDfs(G,v) {

    if (G[v]===undefined){
        return '('+v+')';
    }else if(G[v].length === 1){
        return '('+ v +  printDfs(G,G[v][0]) +')' ;
    }else if(G[v].length === 2){
        return '('+ v + printDfs(G,G[v][0]) + printDfs(G,G[v][1])+')';
    }

}


for(var i=0;i<inputs.length;i++){
    console.log("################ case 0"+i);
    var saida = processData(inputs[i]);
    console.log("ESPERAVA->",outputs[i],"<-ESPERAVA");
    console.log("AssertEqual",inputs[i].localeCompare(outputs[i].trim()));

}

