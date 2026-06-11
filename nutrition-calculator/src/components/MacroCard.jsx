import { useEffect, useRef, useState } from 'react'
import { Beef, Leaf, Wheat, Flame } from 'lucide-react'
import { motion } from 'framer-motion'
import { MACRO_CONFIG } from '../constants/nutrition'

const ICONS = { Beef, Leaf, Wheat, Flame }

/**
 * MacroCard — displays a single macro metric with color-coded
 * accent stripe, icon, value, and animated progress bar.
 *
 * @param {{ macroKey: string, value: number }} props
 */
export default function MacroCard({ macroKey, value }) {
  const cfg = MACRO_CONFIG[macroKey]
  const Icon = ICONS[cfg.icon]
  const pct = Math.min(100, Math.round((value / cfg.maxRef) * 100))
  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    // Delay so the CSS transition fires after mount
    const t = setTimeout(() => setBarWidth(pct), 80)
    return () => clearTimeout(t)
  }, [pct])

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-[#18181d] border border-[#2a2a32] rounded-xl p-4 relative overflow-hidden"
    >
      {/* Top accent stripe */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: cfg.accent }}
      />

      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center mb-3"
        style={{ background: cfg.iconBg }}
      >
        <Icon size={16} color={cfg.color} />
      </div>

      {/* Label */}
      <p className="text-[11px] font-medium text-[#6b6b78] uppercase tracking-wider mb-1">
        {cfg.label}
      </p>

      {/* Value */}
      <p
        className="text-3xl font-bold leading-none mb-1"
        style={{ color: cfg.color }}
      >
        {value}
      </p>

      {/* Unit */}
      <p className="text-[12px] text-[#6b6b78]">{cfg.unit}</p>

      {/* Animated progress bar */}
      <div className="h-[3px] bg-[#2a2a32] rounded-full mt-3 overflow-hidden">
        <div
          className="h-full rounded-full transition-[width] duration-[900ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ width: `${barWidth}%`, background: cfg.accent }}
        />
      </div>
    </motion.div>
  )
}
