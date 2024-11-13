import React from 'react'

function page() {
  return (
    <div className="flex items-center justify-center p-6">

      <div className="max-w-2xl w-full bg-slate-200 backdrop-blur-xl rounded-lg shadow-lg p-6 space-y-5">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Get in Touch
        </h1>
        <p className="text-center text-gray-700">
          We’d love to hear from you! Drop us a message below and we’ll get back to you as soon as possible.
        </p>
        <form className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-800">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-800">Message</label>
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-md py-2 hover:from-purple-700 hover:to-pink-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

    </div>
  )
}

export default page
