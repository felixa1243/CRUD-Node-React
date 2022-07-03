import express from 'express';
import fileUpload from 'express-fileupload';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(fileUpload());

app.use((req, res) => {
  res.json({
    error: 'Not found',
  });
});
app.listen(3000, () => console.log('server running'));
