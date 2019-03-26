// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
   "alpha": "Adams",
   "bravo": "Boston",
   "charlie": "Chicago",
   "delta": "Denver",
   "echo": "Easy",
   "foxtrot": "Frank"
  }

  result = lookup[val]; 
  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("charlie");

// Testing Objects for Properties

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty(checkProp)) {
  return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");