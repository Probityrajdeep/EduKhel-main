import { motion } from "framer-motion";

const tiers = [
  { name: "Free", price: "$0", features: ["Daily challenges", "Limited quizzes", "Community leaderboard"] },
  { name: "Pro", price: "$6/mo", features: ["All games", "Detailed analytics", "Priority support"] },
  { name: "Team", price: "$25/mo", features: ["Teacher dashboard", "Classrooms & cohorts", "Assignments & reports"] },
];

export default function Pricing() {
  return (
    <div className="pt-24 max-w-6xl mx-auto text-white">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-4xl font-extrabold mb-4">Choose Your Power-Up ⚡</motion.h1>
      <p className="text-gray-300 mb-8">Pick a plan and unlock more XP, games, and rewards.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <motion.div key={t.name} whileHover={{ y: -6, scale: 1.02 }} className="p-6 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10">
            <h3 className="text-2xl font-bold mb-2">{t.name}</h3>
            <div className="text-3xl font-extrabold mb-4">{t.price}</div>
            <ul className="space-y-2 text-gray-300 mb-6">
              {t.features.map((f) => (<li key={f}>✅ {f}</li>))}
            </ul>
            <button className="w-full py-3 rounded-xl bg-yellow-400 text-black font-bold hover:shadow-xl">Start</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


