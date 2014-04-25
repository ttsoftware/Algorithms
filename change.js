function change(d, n) {
    
    var c = []; 
    var coins = [];
    c[0] = 0;
    for (var j = 1; j <= n; j++) {
        c[j] = Infinity;
        for (var i = 0; i < d.length; i++) {
            if (j >= d[i] && 1+c[j-d[i]] < c[j]) {
                c[j] = 1+c[j-d[i]];
                coins[j] = d[i];
            }
        }
    }
    return coins;
}

function printChange(denom, j) {
    if (j > 0) {
        printChange(denom, j - denom[j]);
        print(denom[j]);
    }
}

function greedyChange(d, n) {
    
    var r = [];
    var t = [];
    
    for (i = 0; i < d.length; i++) {
        if (i == 0) {
            var m = divideRest(n, d[i]);
            r[i] = m[0];
            t[i] = m[1];
        }
        else {
            var m = divideRest(r[i-1], d[i]);
            r[i] = m[0];
            t[i] = m[1];
        }
    }
    return t;
}

function divideRest(n, c) {
    r = n % c;
    t = Math.floor(n / c);
    return [r, t];
}


var d = [1, 5, 10, 25];
var c = [25, 10, 7, 5, 1];
var n = 14;

print(greedyChange(c, n));
var denom = change(c, n);

printChange(denom, n)