/**
 * Convert weight to kg regardless of input unit.
 * @param {number} value
 * @param {'kg'|'lbs'} unit
 * @returns {number} weight in kg
 */
export function toKg(value, unit) {
  return unit === 'kg' ? value : Math.round(value / 2.205)
}


/**
 * Calculate daily macro targets based on weight, gender, and goal.
 * Sources: DRI guidelines + ISSN sports nutrition position stands.
 *
 * @param {number} weightKg
 * @param {'male'|'female'} gender
 * @param {'maintain'|'muscle'|'loss'|'endurance'} goal
 * @returns {{ protein: number, fiber: number, carbs: number, calories: number }}
 */
export function calcNutrition(weightKg, gender, goal) {
  const m = gender === 'male'

  const proteinMultipliers = {
    maintain:  0.8,
    muscle:    1.6,
    loss:      1.2,
    endurance: 1.4,
  }

  const carbMultipliers = {
    maintain:  m ? 4.5 : 4.0,
    muscle:    5.5,
    loss:      2.5,
    endurance: 6.5,
  }

  const calMultipliers = {
    maintain:  m ? 30 : 27,
    muscle:    m ? 36 : 33,
    loss:      m ? 24 : 22,
    endurance: m ? 40 : 37,
  }

  const fiberByGoal = {
    maintain:  m ? 32 : 25,
    muscle:    m ? 32 : 25,
    loss:      m ? 38 : 30,
    endurance: m ? 34 : 28,
  }

  return {
    protein:  Math.round(weightKg * proteinMultipliers[goal]),
    fiber:    fiberByGoal[goal],
    carbs:    Math.round(weightKg * carbMultipliers[goal]),
    calories: Math.round(weightKg * calMultipliers[goal]),
  }
}

/**
 * Format weight for display with unit label.
 * @param {number} value
 * @param {'kg'|'lbs'} unit
 * @returns {string}
 */
export function formatWeight(value, unit) {
  return `${value} ${unit}`
}
