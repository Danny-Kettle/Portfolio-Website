import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [emailSent, setEmailSent] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setEmailSent(true);
  };

  return (
    <div className="pt-40">
      <div className="bg-[#ffffff07] gap-8  flex flex-row max-w-5xl mx-auto rounded-3xl p-12 shadow-2xl border border-[#ffffff2a]">
        {emailSent === false ? (
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
                  value={formData.name}
                  onChange={handleChange}
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
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
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
        ) : (
          <div className="flex flex-col gap-4 justify-center items-center flex-1">
            <h1 className="text-xl text-white font-semibold">"Email Sent"</h1>
            <p className="text-md text-white text-center">Note email is not actually sent as Github Pages will only allow for external services and APIs to send emails.</p>
          </div>
        )}
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
