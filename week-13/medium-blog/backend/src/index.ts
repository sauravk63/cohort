import { Hono } from 'hono'
import { requestId } from 'hono/request-id'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign, verify } from 'hono/jwt'



const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_TOKEN : string
  }
}>()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json();

  const user = await prisma.user.create({
    data : {
      email : body.email,
      password : body.password
    }
  })

  if(!user){
    c.status(403);
    return c.json({error : 'User not found'})
  }

  //@ts-ignore
  const token = await sign({id : user.id}, c.env.JWT_TOKEN)

  return c.json({token})
})

// app.post('/api/v1/signup', async (c) => {
// 	const prisma = new PrismaClient({
// 		datasourceUrl: c.env?.DATABASE_URL	,
// 	}).$extends(withAccelerate());

// 	const body = await c.req.json();
// 	try {
// 		const user = await prisma.user.create({
// 			data: {
// 				email: body.email,
// 				password: body.password
// 			}
// 		});
//     //@ts-ignore
// 		const jwt = await sign({ id: user.id }, c.env.JWT_TOKEN);
// 		return c.json({ jwt });
// 	} catch(e) {
// 		c.status(400);
// 		return c.json({ error: "error while signing up" });
// 	}
// })

app.post('/api/v1/user/signin', async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
  
    const body = await c.req.json();

    const user = await prisma.user.findUnique({
      where : {
        email : body.email,
        password : body.password
      }
    })

    if(!user){
      c.status(400)
      return c.json({error : 'User not found!'})
    }

    //@ts-ignore
    const token = await sign({id : body.id}, c.env.JWT_TOKEN);
  
    return c.json({token})
  }
)

app.use('/api/v1/blog/*', async (c, next)=>{
  const header = await c.req.header("authorization") || "";

  const response = await verify(header, c.env.JWT_TOKEN)
  if(response.id){
    next()
  } else {
    c.status(403)
    return c.json({error : "unauthorized"})
  }
})



app.post('/api/v1/blog', (c) => c.text('blog posted /'))

app.put('/api/v1/blog', (c) => c.text('blog posted /'))

app.get('/api/v1/blog/:id', (c) => {

  const id = c.req.param("id");
  console.log(id);
  return c.text(`get blog for id : ${id}`)}
)

app.get('/api/v1/blog/bulk', (c) => c.text('blog in bulk /'))



export default app
