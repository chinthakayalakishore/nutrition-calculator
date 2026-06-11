import { User, Users } from 'lucide-react'
import clsx from 'clsx'

/**
 * GenderToggle — Male / Female selector with distinct active colors.
 * Male → blue, Female → pink.
 */
export default function GenderToggle({ value, onChange }) {
  const base =
    'flex-1 h-10 flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border'

  const inactive = 'bg-transparent border-[#2a2a32] text-[#6b6b78] hover:text-[#c0c0cc] hover:border-[#3a3a48]'
  const maleActive = 'bg-[#1a1a3a] border-[#534AB7] text-[#AFA9EC]'
  const femaleActive = 'bg-[#2a1a26] border-[#993556] text-[#ED93B1]'

  return (
    <div className="flex gap-1.5 p-1 bg-[#18181d] rounded-xl mb-5">
      <button
        className={clsx(base, value === 'male' ? maleActive : inactive)}
        onClick={() => onChange('male')}
        aria-pressed={value === 'male'}
      >
        <User size={15} />
        Male
      </button>
      <button
        className={clsx(base, value === 'female' ? femaleActive : inactive)}
        onClick={() => onChange('female')}
        aria-pressed={value === 'female'}
      >
        <Users size={15} />
        Female
      </button>
    </div>
  )
}
