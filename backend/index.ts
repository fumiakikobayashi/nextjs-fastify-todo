import fastify from "fastify"

const server = fastify()

server.get("/health", async (request, reply) => {
    return { message: "healthy" }
})

server.listen(3000, (err, address) => {
})
