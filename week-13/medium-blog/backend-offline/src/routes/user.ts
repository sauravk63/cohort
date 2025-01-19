import { Hono } from 'hono'
import { Medium_Blog_User } from '@prisma/client'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from '@sauravk63/medium-blog-common'


export const userRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        JWT_TOKEN : string;
    }
}>();


userRouter.post('/signup', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
      
    const body = await c.req.json();
    const {success} = signupInput.safeParse(body);
    if(!success){
      c.status(400)
      return c.json({
        message : "Invalid Inputs"
      })
    }
    try{
  
      const user = await prisma.medium_Blog_User.create({
        data : {
          username : body.username,
          password : body.password
        }
      })
  
      const token = await sign({id : user.id}, c.env.JWT_TOKEN)
  
      return c.text(token)
    }
    catch(e){
      console.log(e);
      c.status(400);
      return c.json({
        error : "Invalid Inputs"
      })
      
    }
})
      
userRouter.post('/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json();
    const {success} = signinInput.safeParse(body);
    if(!success){
      c.status(400)
      return c.json({
        message : "Invalid Inputs"
      })
    }
    try{
    const user = await prisma.medium_Blog_User.findFirst({
      where : {
        username : body.username,
        password : body.password
      }
    })

    if(!user){
      c.status(403)
      return c.json({
        message : "Unauthorized"
      })
    }

    const token = await sign({id : user.id}, c.env.JWT_TOKEN)

    return c.text(token)
    }
    catch(e){
      console.log(e);
      c.status(400);
      return c.json({
        error : "Invalid Inputs"
      })
      
    }
})
