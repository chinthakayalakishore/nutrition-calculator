export const GOALS = [
  { id: 'maintain',  label: 'Maintain',     emoji: '⚖️', desc: 'Stay at current weight' },
  { id: 'muscle',    label: 'Build Muscle',  emoji: '💪', desc: 'Gain lean mass' },
  { id: 'loss',      label: 'Lose Weight',   emoji: '🔥', desc: 'Burn fat, keep muscle' },
  { id: 'endurance', label: 'Endurance',     emoji: '🏃', desc: 'Fuel long training' },
]

export const MACRO_CONFIG = {
  protein: {
    label: 'Protein',
    unit: 'g / day',
    color: '#AFA9EC',
    accent: '#534AB7',
    iconBg: '#1a1a3a',
    icon: 'Beef',
    maxRef: 200,
  },
  fiber: {
    label: 'Fiber',
    unit: 'g / day',
    color: '#5DCAA5',
    accent: '#1D9E75',
    iconBg: '#16271f',
    icon: 'Leaf',
    maxRef: 45,
  },
  carbs: {
    label: 'Carbohydrates',
    unit: 'g / day',
    color: '#EF9F27',
    accent: '#BA7517',
    iconBg: '#2a2010',
    icon: 'Wheat',
    maxRef: 500,
  },
  calories: {
    label: 'Calories',
    unit: 'kcal / day',
    color: '#F0997B',
    accent: '#D85A30',
    iconBg: '#2a1810',
    icon: 'Flame',
    maxRef: 4000,
  },
}

export const TIPS = {
  maintain: [
    'Spread protein evenly across 3 meals for consistent muscle protein synthesis throughout the day.',
    'Include oats, legumes, and vegetables to hit your fiber target naturally without supplements.',
    'Choose whole grain carbs over refined sources for sustained energy and healthy blood sugar control.',
  ],
  muscle: [
    '1.6g protein per kg is the evidence-backed sweet spot for muscle hypertrophy — no need to go higher.',
    'Consume protein within 2 hours post-workout to maximize muscle repair and growth signaling.',
    'Higher carbs replenish glycogen stores — critical fuel for heavy compound training sessions.',
  ],
  loss: [
    'High protein intake preserves lean muscle during your caloric deficit — never reduce it to lose faster.',
    'Fiber keeps you full longer and slows digestion — prioritize vegetables, chia seeds, and legumes.',
    'Cut refined carbs and sugar first; your carb budget should come entirely from whole vegetables and oats.',
  ],
  endurance: [
    'Carb-load 2–3 hours before long sessions — carbohydrates are the primary fuel for aerobic activity.',
    'Moderate protein supports muscle repair after endurance training; don\'t neglect it post-session.',
    'Replenish carbs within 30 minutes post-exercise to restore glycogen stores and speed recovery.',
  ],
}

export const GOAL_LABELS = {
  maintain: 'maintenance',
  muscle: 'muscle building',
  loss: 'weight loss',
  endurance: 'endurance training',
}
