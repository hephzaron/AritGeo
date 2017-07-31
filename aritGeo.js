function aritGeo(array) {
    // initialize variables j and k
    var j = 0;
    var k = 0;

    // use a for loop to test for equality between difference in nth and (n-1)th term
    for (i = 0; i < array.length; i++) {

        // perform test for arithmetic progression and increment j for each equality
        if ((array[i] - array[i + 1]) == (array[i + 1] - array[i + 2])) {
            j++;

            // perform test  for geometrc progression and increment k for each equality
        } else if ((array[i] / array[i + 1]) == (array[i + 1] / array[i + 2])) {
            k++;
        }

    }

    // compare incremental value with array length
    if (j + 1 == array.length - 1) {
        return ("Arithmetic");
    } else if (k + 1 == array.length - 1) {
        return ("Geometric");
    } else if (array.length == 0) {
        return ("0");
    } else {
        return ("-1");
    }

}

aritGeo([4, 6, 8, 10, 12, 14])