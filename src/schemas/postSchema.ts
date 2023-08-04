import { z } from 'zod'

const postSchema = z.object({
    userId:
        z.number({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400"
        })
    ,
    userNickName:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .trim(),
    title:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .trim(),
    ingredients:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .trim(),
    postContent:
        z.string({
            required_error: "Request failed with status code 400",
            invalid_type_error: "Request failed with status code 400",
        })
        .trim(),
}).strict();

module.exports = { postSchema }