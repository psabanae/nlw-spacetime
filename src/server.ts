import fastify from 'fastify';

const app = fastify();

app.listen({
    port: 3333,
}).then(() => {
    console.log('Servidor rodando na porta 3333');
});

app.get('/hello', () => {
    return 'Hello World!'
})