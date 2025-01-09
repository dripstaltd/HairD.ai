import { useState } from "react";

export default function Upload () {
  const [fileInputState, setFileInputState] = useState(''); // store the input value
  const [previewSource ,setPreviewSource] = useState('');

  // When user uploads the file
  const handleFileInputChange = (e) => {
    const file = e.target.files[0] // single file upload
    previewFile(file);
  }

  // sets previews source
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    }
  }

  // Handles form submit -> triggers upload image function if there is an image
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if(!previewSource) return
    uploadImage(previewSource);
  }

  // Uploads file to the api
  const uploadImage = async (base64Image) => {
    try {
      await fetch('/api/upload', {
        method: 'POST',
        body: JSON.stringify({data: base64Image}),
        headers: {'Content-type': 'application/json'}
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className='flex flex-col w-10/12 m-auto'>
      <h1 className='font-bold text-5xl p-4'>Upload</h1>
      <form className='flex flex-col' onSubmit={handleSubmitFile}>
        <input
          type='file'
          name='image'
          className='form-input p-4'
          onChange={handleFileInputChange}
          value={fileInputState}
        />
        <button className='px-6 py-3.5 text-base font-medium text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center' type='submit'>Submit</button>
      </form>
      {previewSource && (
        <img
          src={previewSource}
          alt='uploaded image'
          className='w-60 rounded-lg my-6'
        />
      )}
    </div>
  )
}