"use client";
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

function Page() {

  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [isGenerated, setIsGenerated] = useState("");

  const saveData = async () => {
    
    if (!url || !shorturl) {
      toast.warn("Fields are empty! Please fill them.");
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url, shorturl }),
      });
      
      const data = await response.json();

      if (response.ok) {
        toast.success("Short URL generated successfully!");
        setIsGenerated(true);
      } else {
        toast.error(data.error || "Something went wrong.");
      }
      setshorturl("");
      seturl("");
      setIsGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    }
    catch (e) {
      console.error("Error in backend:", e);
      toast.error("Error occurred while connecting to the server.");
    }
  };



  return (
    <div className='bg-purple-200 mx-auto max-w-lg m-5 p-4 rounded-md'>
     
      <div className='w-4/5 mx-auto'>
        <h1 className='mt-3 font-extrabold text-xl mb-2'>Generate Your URLs</h1>
      </div>

      <div className='flex flex-col items-center'>
        <input
          value={url}
          className='w-4/5 p-2 rounded-md my-1 focus:outline-purple-600'
          placeholder='Enter your URL'
          type="text"
          onChange={e => { seturl(e.target.value); }}
        />

        <input
          value={shorturl}
          className='w-4/5 p-2 rounded-md my-2 focus:outline-purple-600'
          placeholder='Enter your preferred short URL'
          type="text"
          onChange={e => { setshorturl(e.target.value); }}
        />

        <button
          onClick={saveData}
          className='text-white font-semibold bg-purple-600 rounded-md px-2 py-2 mt-3 hover:bg-purple-400'>
          Generate
        </button>

      </div>

      {isGenerated &&
        <div className='font-mono text-sm font-semibold w-4/5 mx-auto my-5'>
          Your link: <Link target='_blank' href={isGenerated}>
            {isGenerated}
          </Link>
        </div>}

      <ToastContainer />
    </div>

  );
}

export default Page;
