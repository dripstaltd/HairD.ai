import express from 'express';
import 'dotenv/config'
import cors from 'cors';
import bodyParser from 'body-parser';
import cloudinary from './utils/cloudinary.js';
import calculateAverageShade from './utils/sharp.js';

const app = express();
const PORT = process.env.PORT;

// Use Cors - Although i am using a proxy in package.json
app.use(cors());

// Increasing the image size limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Parse JSON in the req body
app.use(express.json());

// Http request to upload image to cloudinary
app.post('/api/upload', async (req, res) => {
  try {
    const base64EncodedImageString = req.body.data;

    if (!base64EncodedImageString) {
      throw new Error('Image data is missing');
    }

    const uploadResult = await cloudinary.uploader.upload(base64EncodedImageString, {
      upload_preset: 'hairdai',
      transformation: [
          { width: 100, height: 100, crop: 'crop', gravity: 'center' },
          { effect: 'grayscale' },
          { effect: 'blur:10' },
        ],
      // public_id: 'shoes' // create unique id
    });

    const averageShade = await calculateAverageShade(uploadResult.secure_url);
    console.log(averageShade);
    res.status(200).json({msg: 'Successfully uploaded to cloudinary'});
  } catch (err) {
    console.error(err.message)
    res.status(500).json({error: 'Failed to upload to cloudinary 💩'});
  }
});

// Listening to server
app.listen(PORT || 3001, ()=> {
  console.log(`Listening on port ${PORT}`)
});