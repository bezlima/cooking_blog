import { z } from 'zod'

const userSchema = z.object({
    email:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .email()
        .min(5)
        .trim(),
    name:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .min(3)
        .trim(),
    nickName:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .min(5)
        .trim(),
    password:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .min(8)
        .trim(),
    role:
        z.number()
        .max(2)
        .min(0)
}).strict();

const editUserSchema = z.object({
    name:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .min(3)
        .trim(),
    nickName:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .min(5)
        .trim(),
    password:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .min(8)
        .trim(),
    role:
        z.number()
        .max(2)
        .min(0)
}).strict();

const admSchema = z.object({
    nickName:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .min(5)
        .trim(),
    email:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .email()
        .min(5)
        .trim(),
    role:
        z.number()
        .max(2)
        .min(0)
}).strict();

module.exports = { userSchema, editUserSchema, admSchema }