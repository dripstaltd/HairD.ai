import { useState } from 'react';

export default function Upload({ handleHairData }) {
  const [fileInputState, setFileInputState] = useState(''); // store the input value
  const [previewSource, setPreviewSource] = useState([]); // array for multiple previews

  // When user uploads the file
  const handleFileInputChange = (e) => {
    const files = e.target.files; // Multiple file upload
    const filesArray = Array.from(files);
    previewFiles(filesArray);
  };

  // sets previews source
  const previewFiles = (files) => {
    const previews = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        previews.push(reader.result);

        // Update state once all files are read
        if (previews.length === files.length) {
          setPreviewSource(previews);
        }
      };
    });
  };

  // NOTE: I could handle the file sizes here with sharp.
  // Handles form submit -> triggers upload image function if there is an image
  const handleSubmitFile = async (e) => {
    e.preventDefault();
    if (!previewSource.length) return;

    // Upload each file
    for (const base64Image of previewSource) {
      const result = await uploadImage(base64Image);
      if (result) {
        handleHairData(result); // Server response
      }
    }

    // Reset the inputs
    setFileInputState('');
    setPreviewSource([]);
  };

  // Uploads file to the api
  const uploadImage = async (base64Image, index) => {
    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({ data: base64Image }),
        headers: { 'Content-type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to upload image');

      const data = await response.json();

      return data; // Return response to be accessed by handleHairData State
    } catch (err) {
      console.error('Error uploading image', index, 'to the api:', err);
    }
  };

  return (
    <div className="flex flex-col w-10/12 m-auto">
      <form className="flex flex-col" onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="images"
          multiple
          className="form-input p-4"
          onChange={handleFileInputChange}
        />
        <button
          className="px-6 py-3.5 text-base font-medium text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="flex flex-wrap gap-4 mt-6 h-64">
        {previewSource.length > 0 &&
          previewSource.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`uploaded preview ${index + 1}`}
              className="w-60 rounded-lg"
            />
          ))}
      </div>
    </div>
  );
}
