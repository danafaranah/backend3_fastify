import fs from "fs-extra";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { promisify } from "util";

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = dirname(__filename);

export const deleteImage = async(nameImage) => {

    try {
        await (fs.unlink)(path.resolve(__dirname, "../storage/imgs", nameImage))
    } catch (error) {
        console.log("Error en la función deleteImage");
    }
}