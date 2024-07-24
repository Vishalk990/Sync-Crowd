'use client';

import { useState } from 'react';
import Papa from 'papaparse';

export default function CSVUpload() {
  const [file, setFile] = useState(null);
  const [publicUrl, setPublicUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsLoading(true);
    setError('');

    try {

      // Upload file to Cloudinary
      const formData = new FormData();
      formData.append('file', file);

      const uploadResponse = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: formData,
      });

      const uploadData = await uploadResponse.json();
      if (!uploadData.success) {
        throw new Error(uploadData.message || 'Upload failed');
      }

      console.log("1st Upload Done", uploadData.result);

      // Make POST request to generate data
      const generateResponse = await fetch('https://suryanshbachchan.us-east-1.modelbit.com/v1/generateData/latest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: uploadData.result.secure_url }),
      });

      if (!generateResponse.ok) {
        throw new Error('Data generation failed');
      }

      const generatedData = await generateResponse.json();
      console.log(generatedData);

      console.log("Got the synthetic data");


      // Delete the old csv from cloudinary
      // console.log(uploadData.result.public_id);
      // const deleteResponse = await fetch('/api/cloudinary/delete', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({ publicId: uploadData.result.public_id }),
      // });

      // if (!deleteResponse.ok) {
      //   throw new Error('Failed to delete old file');
      // }

      // console.log("Deleted the old file");


      // Convert json data back to csv
      const csv = Papa.unparse(generatedData);
      console.log("Converted Json to Csv");


      // Upload the new file to cloudinary
      const newFormData = new FormData();
      newFormData.append('file', new Blob([csv], { type: 'csv' }), 'generated_data.csv');

      const newUploadResponse = await fetch('/api/cloudinary/upload', {
        method: 'POST',
        body: newFormData,
      });

      const newUploadData = await newUploadResponse.json();
      setPublicUrl(newUploadData.result.secure_url);

      console.log("2nd upload done");


    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div>
      <input type="file" accept=".csv" onChange={handleFileChange} disabled={isLoading} />
      <button onClick={handleUpload} disabled={!file || isLoading}>
        {isLoading ? 'Processing...' : 'Upload and Generate Data'}
      </button>

      {isLoading && <div>Loading... This may take a while.</div>}

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {
        publicUrl &&
        <a href={publicUrl} download="generated_data.csv">
          <button>Download New Dataset</button>
        </a>
      }
    </div>
  );
}