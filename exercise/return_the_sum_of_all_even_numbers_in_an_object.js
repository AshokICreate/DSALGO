let sum = 0;
function nestedEvenSum (obj2) {
  if(Object.keys(obj2).length === 0) {
      return;
  }
  for(let i = 0; i<Object.keys(obj2).length; i++) {
      let keys = Object.keys(obj2);
      if(typeof obj2[keys[i]] === "object") {
          nestedEvenSum(obj2[keys[i]]);
  } else if(!isNaN(obj2[keys[i]]) && obj2[keys[i]] % 2 === 0) {
         sum = sum + obj2[keys[i]];
    }
  }
  return sum;
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

// nestedEvenSum(obj2); //10
// nestedEvenSum(obj1); //6
