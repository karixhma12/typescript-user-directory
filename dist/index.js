"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sumOfAge(user1, user2) {
    return user1.age + user2.age;
}
function displayUserProfile(up) {
    console.log(`Name : ${up.name}`);
    console.log(`Email : ${up.email}`);
}
let user1 = {
    id: 1,
    name: "Karishma",
    email: "karishma.7022@gmail.com",
    age: 25
};
let user2 = {
    id: 2,
    name: "Priya",
    email: "priya.7022@gmail.com",
    age: 24
};
console.log(sumOfAge(user1, user2));
displayUserProfile(user1);
displayUserProfile({ name: "Priya", email: "priya@example.com" });
//# sourceMappingURL=index.js.map