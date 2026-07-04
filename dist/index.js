"use strict";
/*interface User{
    id:number,
    name:string,
    email:string,
    age:number
}

type UserProfile = Pick<User, 'name'|'email'>;

type UpdateProps = Pick<User, 'name' | 'email' | 'age'>;
type UpdatePropsOptional = Partial<UpdateProps>;

function sumOfAge(user1: User,user2:User):number{
    return user1.age + user2.age
}

function updateUser(updatedProps : UpdatePropsOptional): void{
    console.log("Updating user with : ", updatedProps);
}

updateUser({ email: "new@example.com" });
updateUser({ name: "New Name", age: 30 });
updateUser({});

function displayUserProfile(up:UserProfile):void{
    console.log(`Name : ${up.name}`);
    console.log(`Email : ${up.email}`);
}

let user1: User={
    id:1,
    name:"Karishma",
    email:"karishma.7022@gmail.com",
    age:25
}

let user2: User={
    id:2,
    name:"Priya",
    email:"priya.7022@gmail.com",
    age:24
}

console.log(sumOfAge(user1,user2));
displayUserProfile(user1);
displayUserProfile({ name: "Priya", email: "priya@example.com" });*/
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    endpoint: "https://api.example.com",
    apiKey: "abcdef123456"
};
//# sourceMappingURL=index.js.map