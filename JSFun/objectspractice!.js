// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var rateText = document.getElementById("rate");
alert(rateText);

//ourDog["name"] = prompt("Your new adorable dog needs a catchy name! Enter it here: ");
//
//alert(ourDog.name);

//
//// Only change code below this line.
//
//var myDog = {
//  "name": "Nilda",
//  "legs": 4,
//  "tails": 1,
//  "friends": ["Boris", "Alan", "Zhi", "Aaron"]  
//};
//
//
//var borisLaptop = {
//  "screenSize": "15 inches",
//  "version": "MacBook Pro",
//  "hardDriveSize": "500 GB",
//  "RAM": "16 GB"
//}

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

// Setup
var myPlants = [
  { 
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line
