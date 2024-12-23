import React, { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Ensure styles are imported

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log form data to console
    console.log('Form submitted:', formData);
    
    // Reset form fields
    setFormData({
      name: '',
      email: '',
      budget: '',
      message: ''
    });

    // Show success toast
    toast.success('Your message has been sent successfully!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="container mx-auto max-width section relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Contact Info & Social Links */}
        <div className="space-y-6 pt-10">
          <h1 className="text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Get in touch
            </span>
          </h1>

          <p className="text-lg text-dark-content dark:text-light-content">
            Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 24 hours.
          </p>

          <div className="space-y-4">
            <a href={`mailto:bhaveshpatidar443@gmail.com`} className="flex items-center gap-3 text-gradient hover:opacity-80 transition-opacity">
              <Mail className="w-6 h-6 text-white" />
              <span className="text-xl">bhaveshpatidar443@gmail.com</span>
            </a>

            <a href={`tel:+917909436492`} className="flex items-center gap-3 text-gradient hover:opacity-80 transition-opacity">
              <Phone className="w-6 h-6 text-white" />
              <span className="text-xl">+91 7909436492</span>
            </a>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="bg-brown dark:bg-dark rounded-lg p-6 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-dark-heading dark:text-light-heading text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="bhavesh patidar"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-inherit text-white opacity-100 border border-dark-content dark:border-light-content focus:outline-none focus:ring-2 focus:ring-gradient"
                required
              />
            </div>

            <div>
              <label className="block text-dark-heading dark:text-light-heading text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="bhaveshpatida443@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-inherit dark:bg-dark border border-dark-content dark:border-light-content text-white focus:outline-none focus:ring-2 focus:ring-gradient"
                required
              />
            </div>

            <div>
            <label className="block text-dark-heading dark:text-light-heading text-sm font-medium mb-2">
              Your approximate budget (USD $)
            </label>
            <input
              type="number"
              name="budget"
              value={formData.budget}
              placeholder="300$"
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-inherit dark:bg-dark border border-dark-content dark:border-light-content text-white focus:outline-none focus:ring-2 focus:ring-gradient"
            />

            </div>

            <div>
              <label className="block text-dark-heading dark:text-light-heading text-sm font-medium mb-2">
                Tell more what you are looking for?
              </label>
              <textarea
                name="message"
                value={formData.message}
                placeholder="I want a website for my business"
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-inherit dark:bg-dark border border-dark-content dark:border-light-content text-white focus:outline-none focus:ring-2 focus:ring-gradient"
                rows={4}
                required
              />
            </div>

            <button type="submit" className="w-full px-6 py-3 rounded-md bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 text-white font-medium hover:opacity-90 transition-opacity">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-right" />
    </main>
  );
}

export default Contact;
