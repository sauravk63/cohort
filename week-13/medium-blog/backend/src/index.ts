import { Hono } from 'hono'
import { requestId } from 'hono/request-id'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.post('/api/v1/user/signup', (c) => {
  return c.text('signup route')
}
)

app.post('/api/v1/user/signin', (c) => 
  {
    return c.text('signin route')}
  )

app.post('/api/v1/blog', (c) => c.text('blog posted /'))

app.put('/api/v1/blog', (c) => c.text('blog posted /'))

app.get('/api/v1/blog/:id', (c) => {

  const id = c.req.param("id");
  console.log(id);
  return c.text(`get blog for id : ${id}`)}
)

app.get('/api/v1/blog/bulk', (c) => c.text('blog in bulk /'))



export default app
