function lps(s) {
	
	var t = new Array();
	var i = 0;
	var n = s.length;
	var j = s.length;

	while (i < n) {
		if (s[i] == s[j]) {
			t.push(s[i]);
			i++;
			j--;
			n = j;
		}
		else if (i == (j-1)) {
			j = n;
			i++;
		}
		else {
			j--;
		}
	}

	if (i == j) {
		return t.join('') + s[i] + t.reverse().join('');
	}
	return t.join('') + t.reverse().join('');	
}


var string1 = ["c", "h", "a", "r", "a", "c", "t", "e", "r"];
var string2 = ["m", "a", "b", "c", "k", "a", "c", "b", "a", "l"];
var string3 = ["m", "a", "d", "c", "v", "a", "p", "l", "q", "w"];
var string4 = ["a", "c", "h", "a", "a", "c", "t", "e", "a", "r"];
var string5 = [4, 7, 3, 3, 3, 1];

print(lps(string1) == "carac");
print(lps(string2) == "abcacba");
print(lps(string3) == "ava");
print(lps(string4) == "acaaca");
print(lps(string5) == 333);
