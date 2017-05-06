`
Problem:https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/algorithm/monk-in-the-real-estate/description/
-----
To buy 2 cities, must be a edge between then.
1-2 -> bought cities 1 and 2
1-3 -> bought cites 3 because already got city 1.
Total = 3 cities.

`;



process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {

    var t = parseInt(readLine());
    for(i = 0; i < t; i++){

        var _cases = parseInt(readLine());

        var set = new Set();
        for(j=0;j<_cases;j++){
            arr = readLine().split(' ').map(Number);
            var from = arr[0];
            var to = arr[1];
            set.add(from);
            set.add(to);
        }
        console.log(set.size);

    }
}



