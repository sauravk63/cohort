import z from "zod"


export const signupInput = z.object({
  username : z.string().email(),
  password : z.string().min(6),
  email : z.string().optional()
})

//type inference in zod

export const signinInput = z.object({
    username : z.string().email(),
    password : z.string().min(6),
    
})


//type inference in zod

export const createBlogInput = z.object({
    title : z.string().min(6),
    content : z.string().min(10)
})


export const updateBlogInput = z.object({
    title : z.string().min(6),
    content : z.string().min(10),
    id : z.string()
})

export type SignupInput= z.infer<typeof signupInput>
export type SigninInput= z.infer<typeof signinInput>
export type CreateBlogInput= z.infer<typeof createBlogInput>
export type UpdateBlogInput= z.infer<typeof updateBlogInput>



