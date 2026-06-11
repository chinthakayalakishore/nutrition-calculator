import {
  BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, Cell,
} from 'recharts'
import { motion } from 'framer-motion'

const COLORS = ['#AFA9EC', '#5DCAA5', '#EF9F27', '#F0997B']

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-[#1e1e26] border border-[#2a2a32] rounded-lg px-3 py-2 text-sm">
      <p className="text-[#9090a0] mb-0.5">{label}</p>
      <p className="font-semibold" style={{ color: payload[0].fill }}>
        {payload[0].value}
        <span className="text-[#6b6b78] font-normal ml-1 text-xs">
          {label === 'Calories' ? 'kcal' : 'g'}
        </span>
      </p>
    </div>
  )
}

/**
 * MacroChart — horizontal bar chart showing all 4 macros side by side.
 * Uses Recharts BarChart with custom tooltip and per-bar colors.
 *
 * @param {{ values: { protein, fiber, carbs, calories } }} props
 */
export default function MacroChart({ values }) {
  const data = [
    { name: 'Protein',   value: values.protein,  pct: Math.min(100, Math.round(values.protein  / 200 * 100)) },
    { name: 'Fiber',     value: values.fiber,     pct: Math.min(100, Math.round(values.fiber    / 45  * 100)) },
    { name: 'Carbs',     value: values.carbs,     pct: Math.min(100, Math.round(values.carbs    / 500 * 100)) },
    { name: 'Calories',  value: values.calories,  pct: Math.min(100, Math.round(values.calories / 4000 * 100)) },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.1 }}
      className="bg-[#18181d] border border-[#2a2a32] rounded-xl p-4 mb-3"
    >
      <p className="text-[11px] font-medium text-[#6b6b78] uppercase tracking-wider mb-4">
        % of daily reference
      </p>
      <ResponsiveContainer width="100%" height={160}>
        <BarChart data={data} barCategoryGap="30%" layout="vertical">
          <XAxis
            type="number"
            domain={[0, 100]}
            tickFormatter={(v) => `${v}%`}
            tick={{ fill: '#6b6b78', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fill: '#9090a0', fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            width={60}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: '#ffffff08' }} />
          <Bar dataKey="pct" radius={[0, 4, 4, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </motion.div>
  )
}
