import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import upload from './src/routes/upload.js'
const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.static('public/images'))
app.use('/', upload)
app.use((req, res) => {
    res.json({
        error: 'Not found',
    });
});
app.listen(3000, () => console.log('server running'));