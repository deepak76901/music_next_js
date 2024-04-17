import React from "react";

export default function Contact() {
  return (
    <div className="mt-24">
      <h1 className="text-5xl font-bold pt-5 text-center">Contact Us</h1>
      <div className="flex flex-col space-y-5 w-full max-w-2xl mx-auto my-10">
        <input
          type="text"
          className="py-2 bg-gray-700 rounded-md px-2 text-white text-lg placeholder:text-gray-300"
          placeholder="Send to..."
        />
        <textarea
          rows={5}
          className="py-2 bg-gray-700 rounded-md px-2 text-white text-lg placeholder:text-gray-300"
          placeholder="content..."
        />
        <button  type="button" className="text-black bg-white w-32 p-1 rounded-sm text-base font-semibold mx-auto">Send</button>
      </div>
    </div>
  );
}
