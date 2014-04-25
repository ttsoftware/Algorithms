function insertionSort(a) {
	for (var i = 0; i != a.length; i++) {
		var k = i;
		var j = i - 1;
		while (a[k] < a[j]) {
			swap(a, j, k);
			k = j;
			j--;
		}
	}
}

function swap(a, x, y) {
	var b = a[y];
	a[y] = a[x];
	a[x] = b;
}

var c = [1, 2, 3, 4, 1, 2, 4, 5, 9, 123234, 234, 5, 5, 54];

print(c);

insertionSort(c);

print(c);