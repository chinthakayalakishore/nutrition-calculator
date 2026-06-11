import { useState, useCallback } from 'react'
import { calcNutrition, toKg } from '../utils/calculations'

/**
 * useNutrition — encapsulates all form state and calculation logic.
 * Returns state values + setters + calculate trigger.
 */
export function useNutrition() {
  const [gender, setGender]   = useState(null)
const [unit, setUnit]       = useState(null)
const [goal, setGoal]       = useState(null)
  const [weight, setWeight]   = useState('')
  const [result, setResult]   = useState(null)
  const [error, setError]     = useState(false)

  const calculate = useCallback(() => {
  const raw = parseFloat(weight)

  if (!gender || !unit || !goal) {
    setError(true)
    setTimeout(() => setError(false), 1200)
    return
  }
  if (!raw || raw < 1 || raw > 700) {
    setError(true)
    setTimeout(() => setError(false), 1200)
    return
  }

  const kg = toKg(raw, unit)
  setResult({
    values: calcNutrition(kg, gender, goal),
    displayWeight: `${raw} ${unit}`,
    gender,
    goal,
  })
}, [weight, unit, gender, goal])

  return {
    gender, setGender,
    unit,   setUnit,
    goal,   setGoal,
    weight, setWeight,
    result,
    error,
    calculate,
  }
}
