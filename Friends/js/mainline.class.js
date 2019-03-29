"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var friend_class_1 = require("./friend.class");
var friends = [
    new friend_class_1.friend("Greg", 8, "Green"),
    new friend_class_1.friend("Nick", 123, "Hot Pink"),
    new friend_class_1.friend("Aaron", 10000, "Gold"),
    new friend_class_1.friend("Yelena", 74, "Orange"),
    new friend_class_1.friend("Katrina", 49, "Red")
];
for (var _i = 0, friends_1 = friends; _i < friends_1.length; _i++) {
    var f = friends_1[_i];
    f.print();
}
