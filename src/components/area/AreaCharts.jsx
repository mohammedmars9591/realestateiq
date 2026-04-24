"use client";
import React from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const PIE_COLORS = ["#C6A75E", "#E5D3AB", "#CDBE98", "#ECE2CF"];

export function ScorecardChart({ scorecard }) {
  // Mapping current app scorecard names to display names
  // User explicitly asked for: 1)airbnb potenial 2)cash flow 3)appreciation 4)liquidity 5) lifestyle 6)risk
  const data = [
    { metric: "Airbnb", value: scorecard.airbnb * 10 || scorecard.cashFlow * 10 || 50 },
    { metric: "Cash Flow", value: scorecard.cashFlow * 10 || 50 },
    { metric: "Appreciation", value: scorecard.appreciation * 10 || 50 },
    { metric: "Liquidity", value: scorecard.liquidity * 10 || 50 },
    { metric: "Lifestyle", value: scorecard.lifestyle * 10 || 50 },
    { metric: "Low Risk", value: 100 - (scorecard.risk * 10 || 20) },
  ];

  return (
    <ResponsiveContainer width="100%" height={380}>
      <RadarChart data={data} cx="50%" cy="50%" outerRadius="75%">
        <PolarGrid stroke="rgba(198,167,94,0.3)" />
        <PolarAngleAxis dataKey="metric" tick={{ fill: "#C6A75E", fontSize: 11, fontWeight: "bold" }} />
        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
        <Radar name="Score" dataKey="value" stroke="#C6A75E" fill="#C6A75E" fillOpacity={0.3} strokeWidth={3} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export function PriceHistoryChart({ priceHistory }) {
  // priceHistory might be an object like { "2023": "AED 800k", ... }
  const data = Object.entries(priceHistory || {}).map(([year, price]) => ({
    year,
    price: parseInt(price?.replace(/[^0-9]/g, "") || "0", 10),
  }));

  return (
    <ResponsiveContainer width="100%" height={280}>
      <LineChart data={data}>
        <CartesianGrid stroke="rgba(198,167,94,0.1)" vertical={false} />
        <XAxis dataKey="year" tick={{ fill: "#5A4F40", fontSize: 11, fontWeight: 500 }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#5A4F40", fontSize: 11, fontWeight: 500 }} axisLine={false} tickLine={false} />
        <Tooltip
          contentStyle={{
            background: "rgba(253, 251, 247, 0.95)",
            border: "1px solid rgba(198,167,94,0.3)",
            borderRadius: "12px",
            color: "#1C1C22",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        />
        <Line type="monotone" dataKey="price" stroke="#C6A75E" strokeWidth={4} activeDot={{ r: 6, stroke: "#3A3125", strokeWidth: 2 }} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

export function ROIBarChart({ economics, neighborData }) {
  // If neighborData is provided, we show proximity comparison
  // Otherwise we show unit economics ROI
  let data = [];
  
  if (neighborData) {
    data = neighborData;
  } else {
    data = Object.entries(economics || {}).map(([type, details]) => ({
      name: type.charAt(0).toUpperCase() + type.slice(1).replace(/([A-Z])/g, ' $1'),
      roi: parseFloat((details.roi || "0").replace(/[^0-9.]/g, "")),
    }));
  }

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid stroke="rgba(198,167,94,0.1)" vertical={false} />
        <XAxis dataKey="name" tick={{ fill: "#5A4F40", fontSize: 10, fontWeight: "bold" }} axisLine={false} tickLine={false} />
        <YAxis tick={{ fill: "#5A4F40", fontSize: 11 }} axisLine={false} tickLine={false} />
        <Tooltip
          cursor={{ fill: 'rgba(198,167,94,0.05)' }}
          contentStyle={{
            background: "rgba(253, 251, 247, 0.95)",
            border: "1px solid rgba(198,167,94,0.3)",
            borderRadius: "12px",
            color: "#3A3125",
            boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
          }}
        />
        <Bar dataKey="roi" fill="#C6A75E" radius={[6, 6, 0, 0]} barSize={40}>
          {data.map((entry, index) => (
             <Cell key={`cell-${index}`} fill={index === 0 && neighborData ? "#1C1C22" : "#C6A75E"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export function BuyerMixPieChart({ buyerMix }) {
  // Clever regex parsing from v0 template
  const percentMatches = [...(buyerMix || "").matchAll(/(\d+)%\s*([^/]+)/g)];

  const data =
    percentMatches.length > 0
      ? percentMatches.map((match) => ({
          name: match[2].trim(),
          value: parseInt(match[1], 10),
        }))
      : [
          { name: "Investors", value: 65 },
          { name: "End Users", value: 35 },
        ];

  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={2}>
            {data.map((entry, index) => (
              <Cell key={`${entry.name}-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value}%`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="mt-2 flex flex-wrap justify-center gap-3">
        {data.map((entry, index) => (
          <div key={`legend-${entry.name}`} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: PIE_COLORS[index % PIE_COLORS.length] }} />
            <span className="text-xs font-semibold text-[#4A3F2F]">{entry.name} ({entry.value}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MetricInsightCharts({ metrics }) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const safeScore = Math.max(0, Math.min(100, metric.score));
        const chartData = [
          { name: "value", value: safeScore },
          { name: "rest", value: 100 - safeScore },
        ];

        return (
          <div key={metric.title} className="rounded-2xl border border-white/60 bg-white/40 backdrop-blur-xl p-5 shadow-sm transition-all hover:shadow-md hover:bg-white/60">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#A69785]">{metric.title}</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="relative h-20 w-20 shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={chartData} dataKey="value" innerRadius={24} outerRadius={36} startAngle={90} endAngle={-270} stroke="none">
                      {chartData.map((entry) => (
                        <Cell key={`${metric.title}-${entry.name}`} fill={PIE_COLORS[chartData.indexOf(entry) % PIE_COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-bold text-[#3A3125]">{safeScore}%</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-bold text-[#3A3125] leading-snug">{metric.valueLabel}</p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#C6A75E]">Indicator</p>
              </div>
            </div>
            <p className="mt-3 border-t border-[rgba(198,167,94,0.2)] pt-3 text-xs leading-relaxed text-[#4A3F2F]">{metric.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}
