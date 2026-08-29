"use client"

import { useEffect, useState } from "react"
import { TrendingDown, TrendingUp } from "lucide-react"

type Ticker = {
  symbol: string
  name: string
  value: number
  change: number
  decimals: number
}

const base: Ticker[] = [
  { symbol: "EUR/USD", name: "Euro", value: 1.0942, change: 0.21, decimals: 4 },
  { symbol: "DAX", name: "Frankfurt", value: 19840, change: 0.54, decimals: 0 },
  { symbol: "CAC 40", name: "Paris", value: 7920, change: 0.31, decimals: 0 },
  { symbol: "FTSE 100", name: "London", value: 8410, change: -0.12, decimals: 0 },
  { symbol: "STOXX 50", name: "Europe", value: 5180, change: 0.28, decimals: 0 },
]

export function MarketsWidget() {
  const [rows, setRows] = useState(base)

  useEffect(() => {
    const id = setInterval(() => {
      setRows((prev) =>
        prev.map((row) => {
          const jitter = (Math.random() - 0.5) * 0.04
          return {
            ...row,
            change: Math.round((row.change + jitter) * 100) / 100,
            value: row.decimals ? Number((row.value * (1 + jitter / 100)).toFixed(row.decimals)) : Math.round(row.value * (1 + jitter / 100)),
          }
        }),
      )
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="rounded-lg border border-blue-900/40 bg-blue-950/40 overflow-hidden">
      <div className="px-4 py-3 border-b border-blue-900/40 flex items-center justify-between">
        <h2 className="text-sm font-bold tracking-wide uppercase text-white">Markets</h2>
        <span className="text-[10px] text-gray-500 uppercase">Live delayed</span>
      </div>
      <ul>
        {rows.map((row) => {
          const up = row.change >= 0
          return (
            <li
              key={row.symbol}
              className="flex items-center justify-between px-4 py-2.5 border-b border-blue-900/30 last:border-0"
            >
              <div>
                <div className="text-sm font-semibold text-white">{row.symbol}</div>
                <div className="text-[11px] text-gray-500">{row.name}</div>
              </div>
              <div className="text-right">
                <div className="text-sm tabular-nums text-gray-200">
                  {row.decimals ? row.value.toFixed(row.decimals) : row.value.toLocaleString()}
                </div>
                <div className={`text-[11px] tabular-nums flex items-center justify-end gap-0.5 ${up ? "text-emerald-400" : "text-red-400"}`}>
                  {up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                  {up ? "+" : ""}
                  {row.change.toFixed(2)}%
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
