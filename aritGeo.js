function aritGeo(array) {

    for (i = 0; i < array.length; i++) {
        if ((array[i] - array[i + 1]) == (array[i + 1] - array[i + 2])) {
            console.log("Arthmetic")
        } else if ((array[i] / array[i + 1]) == (array[i + 1] / array[i + 2])) {
            console.log("Geometric")
        } else if (array == []) {
            console.log("0")
        } else { console.log("-1") }

    }

}

aritGeo([2, 1, 3, 4, 5, 6])