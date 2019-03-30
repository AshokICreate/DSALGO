function areThereDuplicates(...args) {
  let json = {};
  let areThereDuplicates = false;
  for(let i = 0; i<args.length; i++) {
          if(!json[args[i]]) {
                  json[args[i]] = args[i];
          } else {
                  areThereDuplicates = true;
                  break;
          }
   }
  return areThereDuplicates;
}

areThereDuplicates(1, 2, 3, 5, 5); // true
areThereDuplicates(1, 2, 3, 4, 5); //false
