let arrColl = [];
function collectStrings(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'string') {
      arrColl.push(obj[key])
    } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      collectStrings(obj[key]);
    }
  }
  return arrColl;
}

const obj1 = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}


collectStrings(obj1);
//Output: ["foo", "bar", "baz"];
