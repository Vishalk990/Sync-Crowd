'use client'

import { Loader } from 'lucide-react';
import React, { useState } from 'react';

const Page = () => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center h-[90vh] w-full">
          <Loader className='animate-spin'/>
        </div>
      )}
      <iframe
        className={`h-[90vh] w-full ${loading ? 'hidden' : ''}`}
        src="https://chat-with-csv-synccrowd.vercel.app/"
        frameBorder="0"
        style={{ border: 'none' }}
        title="Chat Application"
        onLoad={handleIframeLoad}
      ></iframe>
    </>
  );
};

export default Page;
