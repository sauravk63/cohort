import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono"
import { verify } from "hono/jwt";
import { createBlogInput, updateBlogInput } from "@sauravk63/medium-blog-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_TOKEN: string;
    };
    Variables: {
        userId: string;
    };
}>();


blogRouter.use('/*', async (c, next)=>{
    const authHeader = await c.req.header("authorization") || "";
    try{
        const user = await verify(authHeader, c.env.JWT_TOKEN);
        const userId = user.id as string;
        if(user){
            c.set("userId", userId)
            await next();
        }
        else{
            c.status(403);
            return c.json({
                message : "You are not logged in"
            })
        }
    }catch(e){
        c.status(401)
        return c.json({
            message : "Invalid Inputs!"
        })
    }
})

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const posts = await prisma.medium_Blog_Posts.findMany()
    return c.json({
        posts
    })
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const authorId = c.get("userId")
    const {success} = createBlogInput.safeParse(body);
        if(!success){
          c.status(400)
          return c.json({
            message : "Invalid Inputs"
        })
    }
    const post = await prisma.medium_Blog_Posts.create({
        data : {
            title : body.title,
            content : body.content,
            authorId : authorId
        }
    })
    return c.json({
        id : post.id
    })
})
  
blogRouter.put('/', async (c)=>{
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const authorId = c.get("userId");
    const {success} = updateBlogInput.safeParse(body);
        if(!success){
          c.status(400)
          return c.json({
            message : "Invalid Inputs"
        })
    }
    const post = await prisma.medium_Blog_Posts.update({
        where : {
            id : body.id
        },
        data : {
            title : body.title,
            content : body.content,
        }
    })
    return c.json({
        id : post.id
    })
})

blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try{
        const post = await prisma.medium_Blog_Posts.findFirst({
            where : {
                id : id
            }
        })
        return c.json({
            post
        })
    }catch(e){
        c.status(401)
        return c.json({
            message : "error while fetching!"
        })
    }
})

