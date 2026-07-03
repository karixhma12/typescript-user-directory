interface User{
    id:number,
    name:string,
    email:string,
    age:number
}

type UserProfile = Pick<User, 'name'|'email'>;

function sumOfAge(user1: User,user2:User):number{
    return user1.age + user2.age
}

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
displayUserProfile({ name: "Priya", email: "priya@example.com" });