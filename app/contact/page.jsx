"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Form submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-4"
    >
      <h2 className="text-2xl font-bold text-center text-black  ">Contact Us</h2>

      {/* Name */}
      <div>
        <label className="block text-sm text-black font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border border-slate-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-black"
          placeholder="Your Name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm text-black font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-2 border border-slate-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-black"
          placeholder="you@example.com"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm text-black font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows="4"
          className="mt-1 block w-full px-4 py-2 border border-slate-400 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-black"
          placeholder="Write your message..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-xl hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  );
}
