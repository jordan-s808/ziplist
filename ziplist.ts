function zipList(list1: unknown[], list2: unknown[]): unknown[] {
  const zipped: unknown[] = [];
  const length = Math.min(list1.length, list2.length);

  for (let i = 0; i < length; i++) {
    zipped.push(list1[i], list2[i]);
  }
  return zipped;
}

function zipListTheFunctionalWay(list1: unknown[], list2: unknown[]): unknown[] {
  return list1.reduce((acc: unknown[], value, index) => {
    acc.push(value, list2[index]);
    return acc;
  }, []);
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3])); // ['a', 1, 'b', 2, 'c', 3]
