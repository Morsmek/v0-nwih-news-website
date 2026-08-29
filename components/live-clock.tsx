"use client"

import { useEffect, useState } from "react"

export function LiveClock() {
  const [time, setTime] = useState("")

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZone: "Europe/Brussels",
        }),
      )
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <span className="tabular-nums text-gray-300">
      {time || "--:--:--"} <span className="text-gray-500">Brussels</span>
    </span>
  )
}
