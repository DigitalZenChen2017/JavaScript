var cleanestCities = ["Cheyenne", "Santa Fe", "Tucson", "Great Falls", "Honolulu"];

var userCity = "Great Falls";

var alert;

if (userCity === cleanestCities[0]) {
    alert(userCity + " is one of the cleanest cities in the U.S.!");

}
else if (userCity === cleanestCities[1]) {
    alert(userCity + " is one of the cleanest cities in the U.S.!");

}
else if (userCity === cleanestCities[2]) {
    alert(userCity + " is one of the cleanest cities in the U.S.!");

}
else if (userCity === cleanestCities[3]) {
    alert(userCity + " is one of the cleanest cities in the U.S.!");

}
else if (userCity === cleanestCities[4]) {
    alert(userCity + " is one of the cleanest cities in the U.S.!");

}
else {
    alert(userCity + " is not on the list of cleanest cities in the U.S.!")
}

var numElements = cleanestCities.length;
var matchFound = false;
for (var i = 0; numElements; i++) {
    if (userCity === cleanestCities[i]) {
        alert(userCity + " is one of the cleanest cities in the U.S.!");
        matchFound = true;
        break;
    }
}
if (matchFound === false) {
    alert("No match was found!");
}