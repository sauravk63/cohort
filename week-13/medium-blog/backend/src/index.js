import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { sign } from 'hono/jwt';
const app = new Hono();
app.get('/', (c) => {
    return c.text('Hello Hono!');
});
app.post('/api/v1/user/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    const user = await prisma.user.create({
        data: {
            email: body.email,
            password: body.password
        }
    });
    if (!user) {
        c.status(403);
        return c.json({ error: 'User not found' });
    }
    //@ts-ignore
    const token = await sign({ id: user.id }, c.env.JWT_TOKEN);
    return c.json({ token });
});
app.post('/api/v1/signup', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try {
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password
            }
        });
        //@ts-ignore
        const jwt = await sign({ id: user.id }, c.env.JWT_TOKEN);
        return c.json({ jwt });
    }
    catch (e) {
        c.status(400);
        return c.json({ error: "error while signing up" });
    }
});
app.post('/api/v1/user/signin', (c) => {
    return c.text('signin route');
});
app.post('/api/v1/blog', (c) => c.text('blog posted /'));
app.put('/api/v1/blog', (c) => c.text('blog posted /'));
app.get('/api/v1/blog/:id', (c) => {
    const id = c.req.param("id");
    console.log(id);
    return c.text(`get blog for id : ${id}`);
});
app.get('/api/v1/blog/bulk', (c) => c.text('blog in bulk /'));
export default app;
