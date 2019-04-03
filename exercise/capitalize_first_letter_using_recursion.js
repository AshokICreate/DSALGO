function capitalizeFirst (str) {
  // add whatever parameters you deem necessary - good luck!

    if(str.length === 1) {
        return str[0][0].toUpperCase() + str[0].substring(1, str[0].length);
    }

    let resultArr = [];
    for(let i = 0; i < str.length; i++) {
        const result = capitalizeFirst([str[i]]);
        resultArr.push(result)

    }
    console.log(str.splice(0, str.length, ...resultArr));
//     console.log("final str", str);
    return str;

}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
