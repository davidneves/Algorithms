var ulist = [2, 88, 5, 30, 7, 1, 9, 78, 11, 12, 37, 13, 4, 19, 14, 20, 22, 89, 26, 1, 28, 34, 45, 64, ];


function selecSort(item) {
    for (var i = 0; i < item.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < item.length; j++) {
            if (item[j] < item[min]) {
                min = j;
            }
        }
        if (min != i) {
            var tmp = item[i];
            item[i] = item[min];
            item[min] = tmp;
        }
    }
    return ulist;
}

console.log(selecSort(ulist));
