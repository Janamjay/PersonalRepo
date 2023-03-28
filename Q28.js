// Find the Index of the First Occurrence in a String


function  strStr(haystack, needle) {
    if(haystack.includes(needle) === true)
    return haystack.indexOf(needle) 
    
    return -1

};

console.log(strStr("sadbutsad","sad"))