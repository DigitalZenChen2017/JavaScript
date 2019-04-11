"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_class_1 = require("./user.class");
var u1 = new user_class_1.User(1, "bchen", "Meditation1234", "Boris", "Chen", "5132909828", "theboris.chen@gmail.com", false, false);
var u2 = new user_class_1.User(2, "achen", "PowerliftingPharm", "Alan", "Chen", "513XXXXXXX", "chen.1411@osu.edu", false, false);
var u3 = new user_class_1.User(3, "jchu", "triplemajorgenius", "Johnson", "Chu", "513XXXXXXX", "flamingpope2019@gmail.com", true, false);
var uArray = [u1, u2, u3];
// Acts like a foreach() loop - for each u object out of uArray do the following statements
for (var _i = 0, uArray_1 = uArray; _i < uArray_1.length; _i++) {
    var u = uArray_1[_i];
    console.log(u.about());
}