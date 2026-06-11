import { Salad, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNutrition } from './hooks/useNutrition'
import { GOAL_LABELS } from './constants/nutrition'

import GenderToggle  from './components/GenderToggle'
import UnitToggle    from './components/UnitToggle'
import GoalSelector  from './components/GoalSelector'
import WeightInput   from './components/WeightInput'
import MacroCard     from './components/MacroCard'
import MacroChart    from './components/MacroChart'
import TipsPanel     from './components/TipsPanel'

export default function App() {
  const {
    gender, setGender,
    unit,   setUnit,
    goal,   setGoal,
    weight, setWeight,
    result, error,
    calculate,
  } = useNutrition()

  return (
    <div className="min-h-screen bg-[#0f0f11] text-[#f1f1f3] font-sans">

      {/* ── Top bar ─────────────────────────────────────── */}
      <header className="flex items-center gap-3 px-6 py-4 border-b border-[#1e1e24] bg-[#0f0f11]">
        <div className="w-8 h-8 rounded-lg bg-[#534AB7] flex items-center justify-center flex-shrink-0">
          <Salad size={16} color="#fff" />
        </div>
        <span className="text-[15px] font-semibold tracking-tight">NutriCalc</span>
        <span className="ml-auto text-[12px] text-[#6b6b78]">v1.0.0 · React + Vite</span>
      </header>

      {/* ── Main layout ─────────────────────────────────── */}
      <main className="max-w-xl mx-auto px-6 py-8">

        {/* Section: Gender */}
        <p className="text-[11px] font-medium text-[#6b6b78] uppercase tracking-widest mb-2">
          Gender
        </p>
        <GenderToggle value={gender} onChange={setGender} />

        {/* Section: Unit */}
        <p className="text-[11px] font-medium text-[#6b6b78] uppercase tracking-widest mb-2">
          Unit
        </p>
        <UnitToggle value={unit} onChange={setUnit} />

        {/* Section: Goal */}
        <p className="text-[11px] font-medium text-[#6b6b78] uppercase tracking-widest mb-2">
          Goal
        </p>
        <GoalSelector value={goal} onChange={setGoal} />

        {/* Section: Weight + CTA */}
        <p className="text-[11px] font-medium text-[#6b6b78] uppercase tracking-widest mb-2">
          Weight
        </p>
        <WeightInput
          value={weight}
          onChange={setWeight}
          onCalculate={calculate}
          unit={unit}
          error={error}
        />

        {/* ── Results ────────────────────────────────────── */}
        <AnimatePresence>
          {result ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              {/* Summary banner */}
              <div className="flex items-start gap-3 bg-[#18181d] border border-[#2a2a32] rounded-xl px-4 py-3 mb-4">
                <Info size={15} className="text-[#534AB7] mt-0.5 flex-shrink-0" />
                <p className="text-[13px] text-[#9090a0] leading-relaxed">
                  Daily targets for a{' '}
                  <span className="text-[#f1f1f3] font-medium">{result.displayWeight} {result.gender}</span>
                  {' '}— goal:{' '}
                  <span className="text-[#f1f1f3] font-medium">{GOAL_LABELS[result.goal]}</span>.
                  {' '}Based on DRI guidelines &amp; ISSN sports nutrition standards.
                </p>
              </div>

              {/* Macro cards grid */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                {Object.entries(result.values).map(([key, val]) => (
                  <MacroCard key={key} macroKey={key} value={val} />
                ))}
              </div>

              {/* Bar chart */}
              <MacroChart values={result.values} />

              {/* Tips */}
              <TipsPanel goal={result.goal} />
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 text-[#3a3a48]"
            >
              <Salad size={40} className="mx-auto mb-3 opacity-30" />
              <p className="text-sm">Enter your weight above to see your daily targets</p>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  )
}
