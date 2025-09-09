import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="pt-24 max-w-4xl mx-auto text-white">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold mb-4">About EduKhel 🎮📚</motion.h1>
      <p className="text-gray-300 mb-6">We blend game mechanics with rich curriculum to turn study time into playtime. Points, levels, streaks, and boss problems make progress feel exciting.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">Mission</h3>
          <p>Make learning irresistible for every student.</p>
        </div>
        <div className="p-5 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">Vision</h3>
          <p>A global arena where learners compete, collaborate, and grow.</p>
        </div>
      </div>
    </div>
  );
}


