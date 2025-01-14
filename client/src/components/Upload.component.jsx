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
      <form className="flex flex-col gap-4 " onSubmit={handleSubmitFile}>
        <div className="inset__dark p-4 ">
          <div
            {...getRootProps({
              className:
                ' outline-dotted outline-2 outline-gray-500 outline-offset-4 content-center h-96 rounded-sm cursor-pointer',
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-center text-white">Drop it like it's hot...</p>
            ) : (
              <p className="text-center text-white">
                Drop files here, or click to select files
              </p>
            )}
          </div>
        </div>

        {/* Below is the display of images ready for uploading */}
        <div className=" flex flex-wrap gap-2 p-2 h-52 inset__dark justify-around">
          {previewSource.length > 0 &&
            previewSource.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`uploaded preview ${index + 1}`}
                className="w-14 h-14 rounded-sm"
              />
            ))}
        </div>
        <button className="btn card__dark w-full p-2" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
