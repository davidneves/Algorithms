var olist = [1, 3, 4, 7, 9, 11, 12, 13, 17, 20, 22, 24, 25, 28, 30, 33, 44, 46, 49, 53, 55, 59, 60, 61, 62, 67, 68, 71, 75, 77];


//iterative

function iteBinSearch(array, value) {
    var init = 0;
    var end = array.length - 1;
    while (init <= end) {
        var midle = Math.floor((init + end) / 2);
        if (value == array[midle]) {
            return array[midle];
        }
        if (value > array[midle]) {
            init = midle + 1;
        } else {
            end = midle - 1;
        }
        //console.log(midle);
        console.log(array[init], array[end]);
    }
}

console.log(iteBinSearch(olist, 22));


//recursive
/*
var init = 0;
var end = olist.length - 1;

function recBinSearch(array, value) {

    var midle = Math.floor((init + end) / 2);

    if (value === array[midle]) {
        return array[midle];
    }

    if (init >= end) {
        return "Not found";
    }

    if (value > array[midle]) {
        init = midle + 1;
        return recBinSearch(array, value);
    } else {
        end = midle - 1;
        return recBinSearch(array, value);
    }

}

console.log(recBinSearch(olist, 22));
*/
