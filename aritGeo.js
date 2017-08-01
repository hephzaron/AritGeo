function aritGeo(array) {
    // initialize variables j and k
    var j = 0;
    var k = 1;

    // use a for loop to test for equality between difference in nth and (n-1)th term
    for (i = 0; i < array.length - 1; i++) {

        // perform test for arithmetic progression and increment j for each equality
        if ((array[1] - array[0]) == (array[i + 1] - array[i])) {
            j++;

            // perform test  for geometrc progression and increment k for each equality
        } else if ((array[1] / array[0]) == (array[i + 1] / array[i])) {
            k++;
        }

    }

    // compare incremental value with array length
    if (j == array.length - 1) {
        return ("Arithmetic");
    } else if (k == array.length - 1) {
        return ("Geometric");
    } else if (array.length === 0) {
        return ("0");
    } else if (!array.some(isNaN)=== false) {
        return ("number only")
    } else if (array.length < 2) {
        return ("not a sequence")
    } else if (Array.isArray(array) === false) {
        return ("not an array")
    } else if(array[0] == 0){
      return ("first element cannot be zero in geometric sequence");
    }
    else {
        return ("-1");
   }

}

aritGeo([8,16,32,64,128])