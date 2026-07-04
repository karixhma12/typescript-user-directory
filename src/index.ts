interface User{
    id:number,
    name:string,
    email:string,
    age:number
}
/*
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

/*type Users = Record<string,User>;

const users:Users = {
    "abc123" : {id: 1, name: "John Doe", email: "john@example.com", age: 30 },
    "xyz890" : {id: 2, name: "Jane Doe", email: "jane@example.com", age: 28 },
};

console.log(users["abc123"]);

const usersMap = new Map<string,User>();

usersMap.set("abc123",{id: 1, name: "John Doe", email: "john@example.com", age: 30});
usersMap.set("xyz890",{id: 2, name: "Jane Doe", email: "jane@example.com", age: 28 });

console.log(usersMap.get("abc123"));
console.log("Map size : ", usersMap.size);*/


type Event = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<Event,'scroll'>;

const handleEvent = (event:ExcludeEvent)=>{
    console.log(`Handling event : ${event}`);
}

handleEvent('scroll');


