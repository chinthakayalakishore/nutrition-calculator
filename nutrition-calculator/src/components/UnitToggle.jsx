import clsx from 'clsx'

/**
 * UnitToggle — kg / lbs switcher.
 * kg → green, lbs → amber.
 */
export default function UnitToggle({ value, onChange }) {
  const base =
    'flex-1 h-10 flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer border'

  const inactive = 'bg-transparent border-[#2a2a32] text-[#6b6b78] hover:text-[#c0c0cc] hover:border-[#3a3a48]'
  const kgActive  = 'bg-[#16271f] border-[#1D9E75] text-[#5DCAA5]'
  const lbsActive = 'bg-[#2a2010] border-[#854F0B] text-[#EF9F27]'

  return (
    <div className="flex gap-1.5 p-1 bg-[#18181d] rounded-xl mb-5">
      <button
        className={clsx(base, value === 'kg' ? kgActive : inactive)}
        onClick={() => onChange('kg')}
        aria-pressed={value === 'kg'}
      >
        kg
      </button>
      <button
        className={clsx(base, value === 'lbs' ? lbsActive : inactive)}
        onClick={() => onChange('lbs')}
        aria-pressed={value === 'lbs'}
      >
        lbs
      </button>
    </div>
  )
}
