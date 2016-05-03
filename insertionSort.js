var ulist = [2, 88, 5, 30, 7, 1, 9, 78, 11, 12, 37, 13, 4, 19, 14, 20, 22, 89, 26, 1, 28, 34, 45, 64, 77, 9];

function insertionSort(item) {
    var len = item.length;
    for (var i = 0; i < len; i++) {
        var current = item[i];
	for (j = i - 1; j >= 0 && item[j] > current; j--) {
		item[j + 1] = item[j];
	}
	item[j + 1] = current;
    }
    return ulist;
}

console.log(insertionSort(ulist));
