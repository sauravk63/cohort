import { Hono } from "hono"

export const blogRouter = new Hono<{
    Bindings : {
        DATABASE_URL : string;
        JWT_TOKEN : string;
    }
}>()

blogRouter.post('/', (c) => {
    return c.text('Hello Hono!')
})
  
blogRouter.put('/', (c)=>{
return c.text('Hello Hono')
})

blogRouter.get('/:id', (c) => {
return c.text('Hello Hono!')
})

blogRouter.get('/bulk', (c) => {
return c.text('Hello Hono!')
})