import sharp from 'sharp';
import fetch from 'node-fetch';

const getBaseLevel = (rgb) => {
  const {r, g, b} = rgb;
  const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return Math.max(1, Math.min(10, Math.round(brightness * 10)));
};

const calculateAverageShade = async (imageUrl) => {
  try {
    // Fetch the cropped image
    const response = await fetch(imageUrl);
    const buffer = await response.arrayBuffer();

    const stats = await sharp(buffer)
      .extract({ left: 100, top: 100, width: 500, height: 500 }) // Crop
      .grayscale() // Convert to grayscale
      .blur(10) // Blur
      .stats(); // Get image stats

    // 'dominant' is the dominant grayscale value
    const baseShade = getBaseLevel(stats.dominant);

    return baseShade;
  } catch (err) {
    console.error('Error processing image:', err.message);
  }
};

export default calculateAverageShade;
