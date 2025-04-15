"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="w-full max-w-lg px-4">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-10 font-bold mb-4 text-center">{"< contact me />"}</h2>
      {!sent ? (
        <>
          <p className="max-w-2xl text-center font-mono text-lg">
            If you want to get in touch, please fill out the form below. I will get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="w-full max-w-lg mt-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="your message"
              />
            </div>
            <button
              type="submit"
              className="bg-[#863c3c] hover:bg-[#c26868] transition-colors cursor-pointer text-white font-bold py-2 px-4 rounded"
            >
              Send
            </button>
          </form>
        </>
      ) : (
        <div className="text-center font-mono text-xl mt-8">
          <p className="mb-4">Message Sent!</p>
          <pre className="text-2xl">
            {"(>^_^)> <3"}
          </pre>
          <p className="mt-4">Thanks for reaching out!</p>
        </div>
      )}
    </div>
  );
}
