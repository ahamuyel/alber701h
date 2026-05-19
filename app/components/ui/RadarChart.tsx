'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/app/context/ThemeContext';

interface RadarChartProps {
  data: { label: string; value: number }[];
  size?: number;
  levels?: number;
  compact?: boolean;
}

export default function RadarChart({
  data,
  size = 280,
  levels = 5,
  compact = false,
}: RadarChartProps) {
  const { isDark } = useTheme();
  const cx = size / 2;
  const cy = size / 2;
  const n = data.length;
  if (n === 0) return null;

  const pad = compact ? 50 : 80;
  const viewSize = size + pad * 2;

  const innerRadius = (size - pad * (compact ? 1.6 : 1.2)) / 2;

  const angleStep = (Math.PI * 2) / n;
  const startAngle = -Math.PI / 2;

  const getPoint = (index: number, value: number) => {
    const angle = startAngle + index * angleStep;
    const r = (value / levels) * innerRadius;
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  };

  const gridPoints = Array.from({ length: levels }, (_, level) =>
    data.map((_, i) => getPoint(i, level + 1))
  );

  const dataPoints = data.map((d, i) => getPoint(i, d.value));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`).join(' ') + 'Z';

  const avg = data.reduce((a, d) => a + d.value, 0) / data.length;

  return (
    <div className="flex justify-center">
      <svg
        width={viewSize}
        height={viewSize}
        viewBox={`0 0 ${viewSize} ${viewSize}`}
        className="overflow-visible"
      >
        <g transform={`translate(${pad}, ${pad})`}>
          {/* Grid rings */}
          {gridPoints.map((points, level) => (
            <polygon
              key={level}
              points={points.map((p) => `${p.x},${p.y}`).join(' ')}
              fill="none"
              stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}
              strokeWidth={1}
            />
          ))}

          {/* Axes */}
          {data.map((_, i) => {
            const p = getPoint(i, levels);
            return (
              <line
                key={i}
                x1={cx}
                y1={cy}
                x2={p.x}
                y2={p.y}
                stroke={isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.08)'}
                strokeWidth={1}
              />
            );
          })}

          {/* Data area */}
          <motion.polygon
            points={dataPoints.map((p) => `${p.x},${p.y}`).join(' ')}
            fill={isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(139, 92, 246, 0.12)'}
            stroke={isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(139, 92, 246, 0.4)'}
            strokeWidth={2}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          />

          {/* Data points */}
          {dataPoints.map((p, i) => (
            <motion.circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={2.5}
              fill={isDark ? '#a78bfa' : '#7c3aed'}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.02 }}
            />
          ))}

          {/* Labels */}
          {data.map((d, i) => {
            const angle = startAngle + i * angleStep;
            const labelRadius = innerRadius + (compact ? 14 : 24);
            const x = cx + labelRadius * Math.cos(angle);
            const y = cy + labelRadius * Math.sin(angle);
            const isLeft = angle > Math.PI / 2 && angle < (3 * Math.PI) / 2;

            return (
              <g key={i}>
                <text
                  x={x}
                  y={y}
                  textAnchor={isLeft ? 'end' : 'start'}
                  dominantBaseline="middle"
                  className={`fill-current transition-colors duration-300 ${
                    isDark ? 'fill-white/50' : 'fill-neutral-500'
                  }`}
                  fontSize={compact ? 7 : 9}
                  fontFamily="ui-monospace, monospace"
                >
                  {compact && d.label.length > 12 ? d.label.slice(0, 11) + '…' : d.label}
                </text>
              </g>
            );
          })}

          {/* Center label */}
          {!compact && (
            <>
              <text
                x={cx}
                y={cy - 4}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-xs font-bold font-mono fill-current transition-colors duration-300 ${
                  isDark ? 'fill-white/60' : 'fill-neutral-600'
                }`}
              >
                {avg.toFixed(1)}
              </text>
              <text
                x={cx}
                y={cy + 10}
                textAnchor="middle"
                dominantBaseline="middle"
                className={`text-[8px] font-mono fill-current transition-colors duration-300 ${
                  isDark ? 'fill-white/30' : 'fill-neutral-400'
                }`}
              >
                avg
              </text>
            </>
          )}
        </g>
      </svg>
    </div>
  );
}
