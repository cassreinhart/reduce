function extractValue(arr, key) {
    return arr.reduce(function(accum, nextObj) {
        accum.push(nextObj[key]);
        return accum;
    }, []);
}

function vowelCount(str) {
    let vowel = 'aeiou';
    return str.split('').reduce(function(accum, nextChar) {
        let lowerCased = nextChar.toLowerCase()
        if (vowel.indexOf(lowerCased) !== -1){
            if(accum[lowerCased]){
                accum[lowerCased]++;
            } else {
                accum[lowerCased] = 1;
            }
        }
        return accum;
    }, {});
}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(val, nextVal, i){
        val[i][key] = value;
        return val;
    }, arr);
}

function partition(arr, callback) {
    return arr.reduce(function(newArr, nextVal) {
        if (callback(nextVal)) {
            newArr[0].push(nextVal);
        } else {
            newArr[1].push(nextVal);
        }
        return newArr
    }, [[],[]]);
}
