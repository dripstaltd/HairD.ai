# Server README

This README covers the server-side implementation of HairD.ai.

## Getting Started

### Prerequisites

Ensure you have Node.js and npm installed on your system.

### Installation

```bash
cd server
npm install
```

### Running the Server

```bash
npm run start
```

The backend server will run on `http://localhost:3001`.

### Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
PORT=3001
CLOUDINARY_NAME=<your_cloudinary_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_api_secret>
```

## Tools and Technologies

- **Node.js / Express**: Backend framework
- **Cloudinary**: Image storage and transformations
- **Sharp**: Image processing library
- **Body Parser**: Middleware for handling JSON request bodies
- **CORS**: Cross-origin resource sharing configuration

---

For additional details, refer to the [main README](../README.md).
