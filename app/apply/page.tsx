"use client";

import { useState } from "react";

export default function Apply() {
  const [formData, setFormData] = useState({
    name: "",
    expertise: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Application submitted! We'll get back to you soon.");
    setFormData({ name: "", expertise: "", email: "" });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Apply to Join the Network</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-gray-600 max-w-md">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border p-2 rounded-lg"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="border p-2 rounded-lg"
        />
        <textarea
          name="expertise"
          value={formData.expertise}
          onChange={handleChange}
          placeholder="Your Expertise"
          className="border p-2 rounded-lg"
        />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition">
          Submit Application
        </button>
      </form>
    </div>
  );
}
