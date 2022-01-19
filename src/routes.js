import express from 'express';
import { AWSImageUploader } from './services/AWSImageUploader';
import encodedImage from "./base64-image.json"

const routes = express.Router()
const imageUploader = new AWSImageUploader();

routes.get('/', (req, res) => res.json({ status: "Server running on port 3333" }))
routes.post('/upload-image', async (req, res) => { 

    try {
        const data = await imageUploader.uploadImageToS3('image.jpg', encodedImage.code);
        res.json({ data });
    } catch(error) {
        res.json({ error });
    }
})

export default routes;