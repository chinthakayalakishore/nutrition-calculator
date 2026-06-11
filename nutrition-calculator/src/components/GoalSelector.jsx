import { GOALS } from '../constants/nutrition'
import clsx from 'clsx'

/**
 * GoalSelector — 4-option grid for user's nutrition goal.
 * Active state uses purple accent (brand color).
 */
export default function GoalSelector({ value, onChange }) {
  const base =
    'flex flex-col items-center justify-center gap-1 h-14 rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer'

  const inactive = 'bg-[#18181d] border-[#2a2a32] text-[#6b6b78] hover:border-[#3a3a48] hover:text-[#c0c0cc]'
  const active   = 'bg-[#1a1a2e] border-[#534AB7] text-[#AFA9EC]'

  return (
    <div className="grid grid-cols-4 gap-1.5 mb-5">
      {GOALS.map((g) => (
        <button
          key={g.id}
          className={clsx(base, value === g.id ? active : inactive)}
          onClick={() => onChange(g.id)}
          aria-pressed={value === g.id}
          title={g.desc}
        >
          <span className="text-base leading-none">{g.emoji}</span>
          <span className="leading-none">{g.label}</span>
        </button>
      ))}
    </div>
  )
}
