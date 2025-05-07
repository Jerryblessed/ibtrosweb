"use client";
import React, { useState } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  const [showContact, setShowContact] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose mailto link to open user's email client
    const subject = encodeURIComponent(`Contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    );
    window.location.href = `mailto:ibtros7@gmail.com?subject=${subject}&body=${body}`;
    setShowContact(false);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Contact Button */}
      <button
        onClick={() => setShowContact(true)}
        className="fixed top-4 left-4 z-20 inline-flex items-center p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700"
        aria-label="Contact Us"
      >
        <Mail size={20} />
      </button>

      {/* Contact Modal */}
      {showContact && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  placeholder="your@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded p-2"
                  rows={4}
                  placeholder="How can we help?"
                  required
                />
              </div>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowContact(false)}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Send Email
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Fullscreen Video Header with Fallback */}
      <div className="absolute inset-0 overflow-hidden bg-[url('/ibtros.png')] bg-cover bg-center">
        <iframe
          src="https://player.vimeo.com/video/1082157353?autoplay=1&muted=1&loop=1&background=1"
          className="absolute inset-0 w-full h-full object-cover"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="IBShuttle Video"
        />

        {/* Overlayed Header Content */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
            Institute-Based Shuttle System
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
            
          </p>
          <a
            href="https://t.me/IBmeal_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Launch Bot <ArrowRight className="ml-2" size={20} />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <main className="relative pt-[100vh] px-6 py-10 max-w-5xl mx-auto">
        <section className="mb-10 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Smart, Affordable, Inclusive Mobility
          </h2>
          <p className="text-lg text-gray-700">
            A Telegram-based AI solution for institutions and individuals that
            simplifies transport, reduces CO₂ emissions, and ensures safe and
            equal access for everyone.
          </p>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            {
              title: "Natural Booking",
              desc: "Request rides using plain language — no app installs or complex forms needed.",
            },
            {
              title: "CO₂ Emission Reduction",
              desc: "Our system promotes carpooling to reduce emissions and fight climate change.",
            },
            {
              title: "Institutional Support",
              desc: "Tailored for schools, hospitals, banks, and more — helping your community move smarter.",
            },
          ].map(({ title, desc }, idx) => (
            <div key={idx} className="border p-6 rounded shadow-sm border-blue-200">
              <h3 className="text-xl font-semibold mb-2 text-blue-600">
                {title}
              </h3>
              <p className="text-gray-700 text-sm">{desc}</p>
            </div>
          ))}
        </motion.section>

        <section className="text-center mb-16">
          <h2 className="text-2xl font-semibold mb-2">Interactive Walkthrough</h2>
          <p className="text-gray-700 mb-6">
            Start by messaging the bot. Say where you’re going, select pickup
            preferences, and get matched with a rider in seconds.
          </p>
          <a
            href="https://t.me/IBmeal_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Try Walkthrough Now
          </a>
        </section>

        <footer className="grid md:grid-cols-2 gap-10 py-10 border-t border-gray-200">
          <div>
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm text-gray-700">
              We are a team of AI and transport enthusiasts solving urban
              mobility for institutions. Our mission is to empower 15M+ Nigerians
              with efficient, clean, and smart transport by 2030.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-700">Email: ibtros7@gmail.com</p>
            <p className="text-sm text-gray-700">Phone: +234 9033528869</p>
            <p className="text-sm text-gray-700">Telegram: @IBmeal_bot</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
