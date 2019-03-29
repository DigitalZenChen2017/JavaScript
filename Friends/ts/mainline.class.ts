import { friend } from "./friend.class";

let friends: friend[] = [ 
    new friend("Greg", 8, "Green"),
    new friend("Nick", 123, "Hot Pink"),
    new friend("Aaron", 10000, "Gold"),
    new friend("Yelena", 74, "Orange"),
    new friend("Katrina", 49, "Red")
];

for(let f of friends) {
    f.print();
}