![Alt-text](https://img.shields.io/badge/yes-nodejs-8A2BE2)

![Logo](./client/src/assets/hairdai_logo_light.png)

# HairD.ai

Hair scanner and colour advice for at-home or salon dyeing.

## Description

Hairdai helps users make realistic and informed decisions when choosing to dye their hair at home or have it professionally colored in a salon. The app's results are based on a single dye session and tailored to each user's unique hair.

Users start by uploading 20 photos of their hair in its current state. They can then choose one of two options:
Select a color they want to achieve.
Explore available options for their hair.
Additional questions, such as "Is your hair already dyed?" help refine the results.
Hairdai generates personalized advice to guide users on their hair-coloring journey. Whether you're planning to dye at home or consult a stylist, Hairdai ensures you're prepared.

Extra Feature: Users could view their hair with the chosen hair colour changed in the image.

_Disclaimer -> Always consult with a professional hairstylist. Hairdai is a guide, but skilled professionals can sometimes achieve results beyond the app's recommendations—often at a higher cost or over multiple sessions._

## MVP

Users should be able to upload photos of their current hair state and receive tailored hair color advice or realistic options for achieving their desired look.

## Tech stack

**Dev**

- Vite
- ESLint
- Prettier
- Jest - (unit testing)

**Front End:**

- Web application (potential for mobile optimization or a mobile app later).
- React (for building the user interface)
- Tailwind CSS
- Jest (for unit testing)
- Axios (for handling API requests).

**Back End:**

- Nodejs (Express)
- Axios: Api
- MongoDB - storing user data and uploaded photos
- Mongoose
- AUTH: JWT for session management (if time)
- Helmet

Libraries:

- Sharp: image grayscale conversion
- Replicate APIS: Background removal
- Cloudinary: Save custom image processing. Might be able to do all image work

## Data sources

Pre-built Hair Color Charts:
A dataset of hair color levels (e.g., lightness 1 - 10, tone variations, etc.) to match user input with achievable results.

## Design

All Css needs to be reworked see image of figma current design. (Designed a dark version because it is cool, though the target audience probably would prefer a bright clean proffessional white one. so that is my current task before implimenting in css/tailwind)

### UI & UX - Figma

![Figma](./client/src/assets/buttons_inset.png)
![Figma](./client/src/assets/figma_dark_ui.png)
![Figma](./client/src/assets/figma_dark_ui_screen_large.png)

### Designing Hair swatches - Photoshop

- Trying to get each level of lightness accurate.

![ps_swatches](./client/src/assets/creating%20swatches%20in%20ps.png)
![ps_swatches](./client/src/assets/creating%20swatches%20in%20ps-2.png)

### Ai Generating images - Flux - ComfyUI

- Node based ai workflows using my terrible RTX2070 GPU to create text to image with comfui, using flux models flux-dev generation for my hair models.

  ![comfyui](./client/src/assets/comfyui_screenshot_hair_models.png)
