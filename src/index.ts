import {z} from "zod";

const userUpdateSchema = z.object({
    name : z.string().min(1,{message : "Name cannot be empty"}),
    email : z.email({message:"invalid email format"}),
    age : z.number().min(18,{message:"You must be atleast 18 years old"})
});

const goodResult = userUpdateSchema.safeParse({ name: "Karishma", email: "karishma@example.com", age: 25 });

if (!goodResult.success) {
  console.log("Validation failed:", goodResult.error.issues);
} else {
  console.log("Validated data:", goodResult.data);
}


