import { Calculator } from 'lucide-react'
import clsx from 'clsx'

/**
 * WeightInput — controlled number input with calculate button.
 * Shows red border on invalid submission (error prop).
 */
export default function WeightInput({ value, onChange, onCalculate, unit, error }) {
  const placeholder = unit === 'lbs' ? 'Enter weight  e.g. 154' : 'Enter weight  e.g. 70'

  function handleKey(e) {
    if (e.key === 'Enter') onCalculate()
  }

  return (
    <div className="flex gap-2 mb-6">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKey}
        placeholder={placeholder}
        min={1}
        max={700}
        className={clsx(
          'flex-1 h-12 bg-[#18181d] rounded-xl px-4 text-base text-[#f1f1f3]',
          'placeholder:text-[#3a3a48] outline-none transition-all duration-200',
          'border focus:border-[#534AB7]',
          error ? 'border-[#E24B4A]' : 'border-[#2a2a32]'
        )}
      />
      <button
        onClick={onCalculate}
        className="h-12 px-6 bg-[#534AB7] hover:bg-[#3C3489] active:scale-95 text-white rounded-xl text-sm font-semibold transition-all duration-150 flex items-center gap-2 whitespace-nowrap"
      >
        <Calculator size={16} />
        Calculate
      </button>
    </div>
  )
}
