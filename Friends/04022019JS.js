// First Option
//var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];
//
//var userCity = "Honolulu";
//
//var alert;
//
//if (userCity === cleanestCities[0]) {
//    alert(userCity + " is one of the cleanest cities in the U.S.!");
//
//}
//else if (userCity === cleanestCities[1]) {
//    alert(userCity + " is one of the cleanest cities in the U.S.!");
//
//}
//else if (userCity === cleanestCities[2]) {
//    alert(userCity + " is one of the cleanest cities in the U.S.!");
//
//}
//else if (userCity === cleanestCities[3]) {
//    alert(userCity + " is one of the cleanest cities in the U.S.!");
//
//}
//else if (userCity === cleanestCities[4]) {
//    alert(userCity + " is one of the cleanest cities in the U.S.!");
//
//}
//else {
//    alert(userCity + " is not on the list of cleanest cities in the U.S.!")
//}
// Second Option
//var numElements = cleanestCities.length;
//var matchFound = false;
//for (var i = 0; numElements; i++) {
//    if (userCity === cleanestCities[i]) {
//        alert(userCity + " is one of the cleanest cities in the U.S.!");
//        matchFound = true;
//        break;
//    }
//}
//if (matchFound === false) {
//    alert("No match was found!");
//}

/* Google Coding Problem
Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.*/

//var num = [10, 15, 3, 7];
//var k = 25;
//var matchFound = false;
//for (var i = 0; i < num.length; i++) {
//    for (var j = 0; j < num.length; j++) {
//        var sum = num[i] + num[j]; // num[0] + num[1] = 25 // 10 + 15 = 25
//        if (sum === k) {
//            alert("Match found!" + num[i] + " + " + num[j] + " = " + k);
//            matchFound = true;
//            break;
//        }
//    }
//}
// Changing Case - 21
var alert;
var prompt;
var userCity = prompt("What's one of the cleanest cities in the United States?");
var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];

for (var i = 0; i < cleanestCities.length; i++) {
    if (userCity.toLowerCase() === cleanestCities[i]) {
        var firstChar = userCity.slice(0, 1);
        var otherChar = userCity.slice(1);
        firstChar.toUpperCase();
        otherChar.toLowerCase();
        var newTitleCaseCity = firstChar + otherChar;
        alert(newTitleCaseCity + " is one of the cleanest cities in the United States!");
    }
}

//// Removing White Space in a String
//str.replace(/\s+/g, '')

// Strings: Measuring length and extracting parts

