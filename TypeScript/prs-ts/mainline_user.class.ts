import { User } from './user.class';

let u1 = new User(1, "bchen", "Meditation1234", "Boris", "Chen", "5132909828", "theboris.chen@gmail.com", false, false);
let u2 = new User(2, "achen", "PowerliftingPharm", "Alan", "Chen", "513XXXXXXX", "chen.1411@osu.edu", false, false);
let u3 = new User(3, "jchu", "triplemajorgenius", "Johnson", "Chu", "513XXXXXXX", "flamingpope2019@gmail.com", true, false);

let uArray: User[] = [u1, u2, u3];

// Acts like a foreach() loop - for each u object out of uArray do the following statements
for (let u of uArray) {
    console.log(u.about());
}