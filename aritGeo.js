function aritGeo(array) {

    var j, k = 0;

    for (i = 0; i < array.length; i++) {
        if ((array[i] - array[i + 1]) == (array[i + 1] - array[i + 2])) {
            j++
        } else if ((array[i] / array[i + 1]) == (array[i + 1] / array[i + 2])) {
            k++
        } else if (array == []) {
            console.log("0")
        } else { console.log("-1") }

    }
    if (j == array.length) {
        console.log("Arithmetic")
    } else if (k == array.length) {
        console.log("Geometric")
    }

}

aritGeo([2, 1, 3, 4, 5, 6])