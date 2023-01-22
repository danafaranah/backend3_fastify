import postCtrl from "../controllers/post.controller.js";
import { upload } from "../middleware/imgUpload.js";
import { postValidSchema } from "../validations/post.validation.js";

const route = (fastify, opts, done) => {
    fastify.get("/", postCtrl.getPosts);
    fastify.get("/:id", postCtrl.listOne);
    fastify.delete("/:id", postCtrl.delete);
    fastify.put("/:id", { preHandler: [upload.single("img")] }, postCtrl.update);
    fastify.post("/", {
            schema: postValidSchema,
            preValidation: [upload.single("img")]
        },
        postCtrl.add);

    done()
}



export default route;