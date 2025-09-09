import { motion } from "framer-motion";

export default function Profile() {
  return (
    <div className="pt-24 max-w-4xl mx-auto text-white">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold mb-4">Your Player Profile 🧑‍🚀</motion.h1>
      <p className="text-gray-300 mb-8">Track XP, streaks, and shiny badges. Power up your learning avatar!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">XP</h3>
          <p className="text-2xl">1,240</p>
        </div>
        <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">Streak 🔥</h3>
          <p className="text-2xl">7 days</p>
        </div>
        <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
          <h3 className="font-semibold mb-2">Badges 🏅</h3>
          <p className="text-2xl">6</p>
        </div>
      </div>
    </div>
  );
}


