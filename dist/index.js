"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const userUpdateSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, { message: "Name cannot be empty" }),
    email: zod_1.z.email({ message: "invalid email format" }),
    age: zod_1.z.number().min(18, { message: "You must be atleast 18 years old" })
});
const goodResult = userUpdateSchema.safeParse({ name: "Karishma", email: "karishma@example.com", age: 25 });
if (!goodResult.success) {
    console.log("Validation failed:", goodResult.error.issues);
}
else {
    console.log("Validated data:", goodResult.data);
}
//# sourceMappingURL=index.js.map