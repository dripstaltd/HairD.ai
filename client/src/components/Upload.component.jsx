/* eslint-disable react/prop-types */
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Upload({ handleHairData }) {
  const [previewSource, setPreviewSource] = useState([]); // Array for multiple previews (stores the Base64 encoded data urls)

  // Handles files dropped or selected
  // useCallback - memoize - function doesn't get recreated on every render.
  const onDrop = useCallback((droppedFiles) => {
    const previews = [];

    droppedFiles.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        previews.push(reader.result);

        // Update state once all files are read
        if (previews.length === droppedFiles.length) {
          setPreviewSource((prev) => [...prev, ...previews]);
        }
      };
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: true,
  });

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
    <>
      <form
        className="flex flex-col bg-pink-500 p-4  w-96 rounded-lg"
        onSubmit={handleSubmitFile}
      >
        <div className="mb-6 flex-1">
          <div
            {...getRootProps({
              className:
                'p-10 rounded-md cursor-pointer bg-white border border-gray-300',
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-center text-gray-600">
                Drop the files here...
              </p>
            ) : (
              <p className="text-center text-gray-600">
                Drag and drop files here, or click to select files
              </p>
            )}
          </div>
        </div>
        <button
          className="py-3.5 w-full text-base font-medium rounded-sm text-center bg-slate-700 text-white"
          type="submit"
        >
          Submit
        </button>
      </form>

      {/* Below is the display of images ready for uploading */}
      <div className="flex flex-wrap gap-4 mt-6 p-4">
        {previewSource.length > 0 &&
          previewSource.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`uploaded preview ${index + 1}`}
              className="w-32 h-32 rounded-sm"
            />
          ))}
      </div>
    </>
  );
}
