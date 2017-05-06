/**
 * Created by jeremias on 5/1/2017.
 */
var input=`45 347 4
9611 4010 2945 8040 8908 2189 8945 5943 1206 1503 2808 409 3077 6633 5015 5587 131 4472 579 3518 8104 6115 2848 7714 3286 1086 9255 9014 9673 9481 2927 5078 8572 1457 3776 4491 3983 9401 4489 8950 9062 7200 6547 9237 4604
36 1
14 21
28 7
28 26
30 22
27 27
8 2
40 25
32 42
24 12
34 6
19 15
37 20
41 25
42 12
21 6
39 37
41 24
4 42
7 27
7 43
27 43
3 29
9 11
19 1
36 35
37 5
20 13
6 4
33 10
44 32
14 4
41 41
20 14
25 10
18 18
36 37
44 31
22 5
32 16
40 32
24 44
2 3
5 33
8 18
16 22
11 26
34 33
38 10
43 34
7 18
12 41
29 14
21 28
16 23
13 5
7 16
9 36
1 32
35 5
26 43
40 3
31 7
24 38
38 4
19 12
42 21
38 43
44 8
34 41
4 17
24 29
15 34
8 42
41 10
27 15
36 43
30 37
40 36
8 26
35 12
11 14
32 21
38 9
9 31
12 28
29 44
8 14
2 15
29 31
15 14
12 27
31 34
41 13
28 42
6 25
28 34
33 29
44 7
16 21
36 41
15 40
43 43
38 5
4 10
9 10
18 35
32 9
14 6
41 11
19 3
18 28
20 29
9 28
3 1
32 5
33 18
31 10
15 21
30 18
41 28
4 8
28 16
42 24
35 34
14 16
20 10
20 23
21 12
41 9
30 44
34 9
21 13
10 26
44 23
6 30
12 31
12 44
19 38
19 5
26 21
9 27
6 6
42 25
23 31
31 42
15 7
17 39
30 33
29 6
7 34
37 31
23 40
25 21
44 17
35 24
38 35
40 1
27 16
27 2
41 5
35 22
42 13
30 23
31 20
7 41
19 20
17 30
34 25
44 6
34 27
24 6
24 25
11 10
24 39
16 24
15 5
37 3
20 11
29 13
33 44
17 27
11 35
38 21
43 30
33 20
9 13
37 10
36 7
8 13
9 17
40 34
15 29
18 25
26 35
7 1
38 1
28 25
11 31
9 26
31 8
26 24
12 34
11 4
19 6
42 39
25 8
36 32
41 20
35 33
19 35
43 8
40 12
18 43
11 23
41 39
9 7
16 19
39 44
29 42
14 37
4 24
14 12
30 7
30 12
7 39
2 20
27 25
35 43
12 23
15 41
14 40
25 29
5 14
38 25
31 2
9 2
36 44
33 1
30 1
35 6
20 24
5 27
23 28
22 41
19 14
17 6
38 20
25 30
15 20
19 40
15 44
22 11
36 15
42 30
21 41
31 27
33 36
11 21
44 28
22 28
37 28
31 21
20 43
38 29
1 15
2 6
14 27
5 5
14 38
27 10
16 41
43 29
37 25
11 25
44 4
31 41
37 26
33 13
11 42
19 29
35 23
23 1
31 1
38 17
22 43
31 32
3 20
13 15
27 37
19 4
16 2
44 22
27 22
17 20
42 16
19 25
11 15
8 34
2 13
32 43
15 30
34 34
5 31
18 2
18 26
31 14
2 10
31 17
40 44
6 43
14 9
18 9
32 10
44 3
34 26
30 34
44 1
6 13
5 36
11 37
30 21
1 29
43 11
39 1
44 43
21 1
13 13
3 7
37 35
42 14
16 43
2 25
34 24
4 15
36 14
37 13
13 12
28 1
29 29
6 18
39 14
28 17
4 26
18 22
16 10
13 35`;




`
Problem: https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/monk-learning-graph-3/



`;



function main(input) {

    var _input = input.split('\n');
    var firstLine = _input[0].split(' ').map(Number);
    var N = firstLine[0];
    var M = firstLine[1];
    var k = parseInt(firstLine[2]);
    var secondLine = _input[1].split(' ').map(Number);

    var input_nodes = _input.slice(2);

    var L = [];
    for (i=0;i<N+1;i++){
        L[i] = [];
    }
   // console.log(L);

    var G = input_nodes;
    for(var i in G){

        var line = G[i].split(' ').map(Number);
        // console.log(line);
        from = line[0]
        to = line[1];
        L[from].push(to);
        L[to].push(from);
    }
    //console.log(L);

    for (i=1;i<L.length;i++){
        var no = L[i];

        var nodesTest = [];


        no.sort(function (a,b){
            aa = secondLine[parseInt(a - 1)];
            bb = secondLine[parseInt(b - 1)];
            var c = bb-aa;
            if(c===0){
                c = parseInt(b)-parseInt(a);
            }
            return c;

        });



        // if(no.length<k){
        //     return -1;
        // }
        try{
            if(no.length===0){
                console.log(-1);
            }else{
                console.log(no[k-1]);
            }
        } catch (e){
            console.log(-1);
        }

    }

}

//
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";
//
// process.stdin.on("data", function (input) {
//     stdin_input += input;
// });
//
// process.stdin.on("end", function () {
//     main(stdin_input);
// });



main(input);

