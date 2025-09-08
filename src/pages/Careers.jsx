import { motion } from "framer-motion";

export default function Careers() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join the EduKhel Team
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-10 max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          We’re building the future of gamified education for classes 6–12. If you’re passionate about learning, games, and great design, come build with us.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: "Frontend Engineer",
            desc: "React, animations, delightful UX.",
            tag: "Engineering"
          }, {
            title: "Game Designer",
            desc: "Design quests, challenges, rewards.",
            tag: "Design"
          }, {
            title: "Curriculum Specialist",
            desc: "Bridge syllabus and gameplay.",
            tag: "Academics"
          }].map((role, i) => (
            <motion.div key={role.title}
              className="relative overflow-hidden rounded-2xl p-6 bg-white/10 backdrop-blur-lg border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30 bg-gradient-to-r from-yellow-400 to-pink-500" />
              <span className="text-xs px-2 py-1 rounded-full bg-purple-600/40 border border-purple-300/30">{role.tag}</span>
              <h3 className="mt-3 text-xl font-bold">{role.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{role.desc}</p>
              <div className="mt-5 flex gap-3">
                <a href="mailto:careers@edukhel.com?subject=Application:%20" className="px-4 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:shadow-lg transition">Apply</a>
                <a href="#open-roles" className="px-4 py-2 rounded-lg bg-purple-600 text-white font-semibold hover:shadow-lg transition">Learn More</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-16 p-6 rounded-2xl bg-white/5 border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-3">Don’t see a role that fits?</h2>
          <p className="text-gray-300">Send your resume and a short note to careers@edukhel.com. We love meeting passionate builders.</p>
        </motion.div>
      </div>
    </div>
  );
}


