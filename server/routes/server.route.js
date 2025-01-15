import express from 'express';
import { uploadImage } from '../controllers/Upload.controller.js';

const router = express.Router();

// Routes
router.post('/upload', uploadImage);

export default router;
