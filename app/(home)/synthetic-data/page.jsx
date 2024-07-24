"use client";

import React, { useState } from 'react';

const Page = () => {

  const [file, setFile] = useState(null);
  const [publicUrl, setPublicUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {

    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setPublicUrl(data.url);


    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <>
      <div>
        <input type="file" accept=".csv" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload</button>
        {publicUrl && <p>Public URL: {publicUrl}</p>}
      </div>
    </>
  );
};

export default Page;




