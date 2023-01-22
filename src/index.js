import cors from "@fastify/cors"
import formBody from "@fastify/formbody"
import Fastify from "fastify"
import { connectDb } from "./database.js"
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fastifyStatic from "@fastify/static";
import postRoutes from "./routes/post.route.js";
import multer from "fastify-multer";



const fastify = Fastify({
    logger: true
})

connectDb()

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = dirname(__filename);

fastify.register(cors, { origin: "*" })
fastify.register(formBody)
fastify.register(multer.contentParser)

// fastify.register(fastifyStatic, {
//     root: path.join(__dirname, '/storage/imgs'),
//     prefix: '/public',
// });

//Rutas

fastify.register(postRoutes, { prefix: "/post" })

const start = async() => {
    try {
        await fastify.listen({
            port: 4000,
            host: "0.0.0.0"
        })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()