import sharp from 'sharp';
import fetch from 'node-fetch';

// Converting rgb value to a brightness value
const getBaseLevel = (rgb) => {
  const { r, g, b } = rgb;
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return Math.max(1, Math.min(10, Math.round(brightness * 10)));
};

const calculateAverageShade = async (imageUrl) => {
  try {
    // Fetch the cropped image from Cloudinary
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();

    // Process the image
    const stats = await sharp(Buffer.from(buffer)).stats(); // Get image stats

    // 'dominant' is the dominant grayscale value
    const baseShade = getBaseLevel(stats.dominant);

    return baseShade;
  } catch (err) {
    console.error('Error processing image with Sharp:', err.message);
  }
};

export default calculateAverageShade;
