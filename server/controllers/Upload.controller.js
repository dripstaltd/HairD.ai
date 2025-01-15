import cloudinary from '../utils/cloudinary.js';
import calculateAverageShade from '../utils/sharp.js';

export const uploadImage = async (req, res) => {
  try {
    const base64EncodedImageString = req.body.data;

    if (!base64EncodedImageString) {
      throw new Error('Image data is missing');
    }

    const uploadResult = await cloudinary.uploader.upload(
      base64EncodedImageString,
      {
        upload_preset: 'hairdai',
        transformation: [
          { width: 500, height: 500, crop: 'crop', gravity: 'center' },
          { effect: 'grayscale' },
          { effect: 'blur:10' },
        ],
      }
    );

    const averageShade = await calculateAverageShade(uploadResult.secure_url);

    res.status(200).json({
      message: 'Successfully uploaded to Cloudinary',
      base_shade: averageShade,
      image_url: uploadResult.secure_url,
    });
  } catch (err) {
    console.error('Error processing image:', err.message);
    res.status(500).json({ error: 'Failed to upload to Cloudinary 💩' });
  }
};
