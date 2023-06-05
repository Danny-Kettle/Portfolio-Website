import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="pt-40">
      <div className="bg-[#ffffff07] gap-8  flex flex-row max-w-5xl mx-auto rounded-3xl p-12 shadow-2xl border border-[#ffffff2a]">
        <div className="gap-8 flex flex-col">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-2 flex flex-row gap-3">
              Contact Me <span>🤝</span>
            </h2>
            <p className="text-md text-white">
              Want to know more about me? Please enter your details below.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 max-w-md"
          >
            <div>
              <label
                htmlFor="name"
                className="text-white block mb-2 font-medium"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 font-medium"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-white block mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 w-32  bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="text-white w-full flex  justify-center flex-1 items-center">
          <div id="contact-details" className="flex-col flex gap-5">
            <p className="text-3xl flex flex-row items-center">
              <span className="w-16">📱</span>
              <span className="text-xl w-42">+44 07598 175988</span>
            </p>
            <p className="text-3xl flex flex-row items-center">
              <span className="w-16">📪</span>{" "}
              <span className="text-xl w-42">danny.kettle@outlook.com</span>
            </p>
            <p className="text-3xl flex flex-row items-center">
              <span className="w-16">📍</span>
              <span className="text-xl w-42">Cheshire, United Kingdom</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
