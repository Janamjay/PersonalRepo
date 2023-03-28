// length of last word


function  lengthOfLastWord(s) {
    let len = 0;
 for (let i = s.length - 1; i >= 0; i--) {
   if (s[i] === ' ') {
     if (len > 0) {
       return len;
     }
   } else {
     len++;
   }
 }
 return len;
};

console.log(lengthOfLastWord("Hello World"));