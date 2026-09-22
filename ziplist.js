"use strict";
function zipList(list1, list2) {
    const zipped = [];
    const length = Math.min(list1.length, list2.length);
    for (let i = 0; i < length; i++) {
        zipped.push(list1[i], list2[i]);
    }
    return zipped;
}
function zipListTheFunctionalWay(list1, list2) {
    return list1.reduce((acc, value, index) => {
        acc.push(value, list2[index]);
        return acc;
    }, []);
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
