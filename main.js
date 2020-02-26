/******************
 * YOUR CODE HERE *
 ******************/

// math.min = The Math. min() function is used to return the 
//lowest-valued number passed in the function. The Math. min() 
//function returns NaN if any parameter isn't a number and can't 
//be converted into one.

function slice(string, start=0, end='') {
  let outCome = "";
  
  if(end === '') {
    end = string.length;
  }
  for(let i = start; i < Math.min(string.length, end); i++) {
    outCome += string[i];
  }

  return outCome;
}
// What im getting form this problem is that the function repeat has two parameters
// param1= string param2 = count. ill need to create a variable to hold my array. 
//I created a for loop to hold one param (count) since the count will be the one to repeat the array 
//then in the brackets of my for loop ill be inserting the answer variable which holds my ([]) 
// answer = answer plus string
// now ill need to return my array (answers)
function repeat(string, count) {
  answers = [];
  for(let i = 0; i < count; i++) {
    answers += string;
  }

  return answers;
}
//I have a function which contains two params string
//
//
//
//

function startsWith(string, string2) {
  return string2 === slice(string, 0, string2.length);
}

function endsWith(string, string2) {
  return string2 === slice(string, string.length - string2.length, string.length);
}

function includes(array, item) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === item) {
      return true;
    }
  }
  return false;
}

function join(array, separator = '') {
  let out = '';
  for(let i = 0; i < array.length; i++) {
    out += array[i];
    if(i + 1 < array.length) {
      out += separator;
    }
  }

  return out;
}

function split(string, split = '') {
  let out = [];
  let current = '';

  for(let i = 0; i < string.length; i++) {
    if(string[i] == split[0]) {
      out.push(current);
      current = '';
    } else {
      current += string[i];
    }
  }
  out.push(current);

  return out;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof slice === 'undefined') {
  slice = undefined;
}

if (typeof repeat === 'undefined') {
  repeat = undefined;
}

if (typeof startsWith === 'undefined') {
  startsWith = undefined;
}

if (typeof endsWith === 'undefined') {
  endsWith = undefined;
}

if (typeof includes === 'undefined') {
  includes = undefined;
}

if (typeof join === 'undefined') {
  join = undefined;
}

if (typeof split === 'undefined') {
  split = undefined;
}

if (typeof trimStart === 'undefined') {
  trimStart = undefined;
}

if (typeof trimEnd === 'undefined') {
  trimEnd = undefined;
}



module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
