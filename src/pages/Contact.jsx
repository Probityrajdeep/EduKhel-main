import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:support@edukhel.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <motion.p className="text-gray-300 mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Have a question or feedback? Send us a message and we’ll get back to you.
        </motion.p>

        <motion.form onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-6 grid grid-cols-1 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div>
            <label className="block text-sm text-gray-300 mb-1">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm text-gray-300 mb-1">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required rows={6}
              className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Write your message..." />
          </div>
          <div className="flex gap-3">
            <motion.button type="submit" className="px-6 py-3 bg-yellow-400 text-black rounded-xl font-bold hover:shadow-lg" whileHover={{ scale: 1.03 }}>
              Send Message
            </motion.button>
            <a href="mailto:support@edukhel.com" className="px-6 py-3 bg-purple-600 text-white rounded-xl font-bold hover:shadow-lg">Email Us</a>
          </div>
        </motion.form>
      </div>
    </div>
  );
}


