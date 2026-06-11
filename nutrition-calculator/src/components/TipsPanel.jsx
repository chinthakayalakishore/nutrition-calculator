import { Lightbulb } from 'lucide-react'
import { motion } from 'framer-motion'
import { TIPS } from '../constants/nutrition'

/**
 * TipsPanel — renders 3 science-backed tips based on the selected goal.
 * Each tip animates in with a staggered delay.
 *
 * @param {{ goal: string }} props
 */
export default function TipsPanel({ goal }) {
  const tips = TIPS[goal] || []

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.2 }}
      className="bg-[#18181d] border border-[#2a2a32] rounded-xl p-4"
    >
      <div className="flex items-center gap-2 mb-4">
        <Lightbulb size={15} color="#EF9F27" />
        <p className="text-[13px] font-semibold text-[#f1f1f3]">Tips for your goal</p>
      </div>

      <div className="flex flex-col gap-0">
        {tips.map((tip, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0.25 + i * 0.08 }}
            className={`flex items-start gap-3 py-3 ${
              i > 0 ? 'border-t border-[#1e1e24]' : ''
            }`}
          >
            <div
              className="w-1.5 h-1.5 rounded-full bg-[#534AB7] mt-2 flex-shrink-0"
            />
            <p className="text-[13px] text-[#9090a0] leading-relaxed">{tip}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
