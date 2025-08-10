'use client'
import React, { useState } from 'react'

const Form
 = () => {
    const [avatar, setAvatar] = useState<File | null>(null);
  return (
    <div className='container mx-auto'>
            <div
      className="min-h-screen flex items-center justify-center  text-white"
      
    >
      <div className="bg-transparent p-8 rounded-2xl max-w-md w-full text-center">
       
        <h1 className="text-2xl font-bold mb-4">Coding Conf</h1>

     
        <h2 className="text-3xl font-extrabold mb-2">
          Your Journey to Coding Conf 2025 Starts Here!
        </h2>
        <p className="text-gray-400 mb-6">
          Secure your spot at next year's biggest coding conference.
        </p>

     
        <label className="block border-2 border-dashed border-gray-500 p-6 rounded-lg cursor-pointer hover:border-orange-400 transition">
          <input
            type="file"
            className="hidden"
            accept="image/png,image/jpeg"
            onChange={(e) => setAvatar(e.target.files?.[0] || null)}
          />
          <div className="flex flex-col items-center">
            <span className="text-orange-400 text-xl">⬆</span>
            <p className="text-sm text-gray-300 mt-2">
              Drag and drop or click to upload
            </p>
            <p className="text-xs text-gray-500 mt-1">
              JPG or PNG, max size: 500KB
            </p>
          </div>
        </label>

        
        <form className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
          />
          <input
            type="text"
            placeholder="GitHub Username"
            className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-600 focus:border-orange-400 outline-none"
          />

      
          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-semibold py-2 rounded-lg hover:bg-orange-400 transition"
          >
            Generate My Ticket
          </button>
        </form>
      </div>
    </div>

    </div>
  )
}

export default Form
