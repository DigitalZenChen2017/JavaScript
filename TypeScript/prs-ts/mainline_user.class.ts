import {User} from './user';

let u1 = new User(1, "bchen", "Meditation1234");
let u2 = new User(2, "achen", "PowerliftingPharm");
let u3 = new User(3, "jchu", "triplemajorgenius");

let uArray: User[] = [u1, u2, u3];

for(let u of uArray) {
    console.log(u.about());
}