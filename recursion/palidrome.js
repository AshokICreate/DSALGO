function isPalidrome(str) {
    console.log(str);
   if(str.length === 1) {
       return true; 
   }
   if(str.length === 2 && str[0] === str[1]) {
       return true;
   }
   if(str[0] === str.slice(-1)) {
    return isPalidrome(str.slice(1, -1));    
   }
   return false;
}

console.log(isPalidrome("malayalam") ? "PALIDROME" : "NOT PALIDROME");