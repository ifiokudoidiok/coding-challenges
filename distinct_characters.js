//  Is Unique: Implement an algorithm to determine if a string has all unique characters.
// Solution 1 

let word, word_filter;
word = "testword"
word_filter =  [...new Set(word)]

let trick_function = (word) => {
    if(word.length === word_filter.length){
        console.log(word)
        console.log(word_filter)
        return true
    }
    console.log(word)
        console.log(word_filter)
    return false
}

trick_function(word)



//Solution 2
let str = "testword"

let freq_counter = (str) => {
    // let split_str = str.split('')
    // console.log(split_str)
    //create an empty object. why? it will be counting the this thing
    let str_obj = {};

    //loop
    for(let i of str) {
        if(str_obj[i]){
            str_obj[i]++
        } else {
          str_obj[i] = 1
        }
    }
    valArr = Object.values(str_obj)
    const max = Math.max(...valArr)
    
    return max > 1 ? false : true
}

freq_counter(str)