"use client"

import { useState, useEffect } from "react"
import { Cloud, CloudRain, CloudSnow, Sun, Loader2, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getWeatherByCity, weatherCities } from "@/lib/weather-service"
import type { WeatherData } from "@/lib/types"

export function WeatherWidget() {
  const [city, setCity] = useState("Brussels")
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getWeatherByCity(city)
      .then((data) => {
        if (!cancelled) {
          setWeather(data)
          setLoading(false)
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [city])

  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase()
    if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) {
      return <CloudRain className="h-8 w-8 text-blue-400" />
    }
    if (lowerCondition.includes("snow")) {
      return <CloudSnow className="h-8 w-8 text-blue-200" />
    }
    if (lowerCondition.includes("cloud")) {
      return <Cloud className="h-8 w-8 text-gray-400" />
    }
    return <Sun className="h-8 w-8 text-yellow-500" />
  }

  return (
    <Card className="bg-gradient-to-br from-blue-900/40 to-blue-950/60 border border-blue-900/40">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-xs text-gray-400 uppercase tracking-wider font-semibold">Weather</div>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="bg-blue-950/80 border border-blue-800 text-xs text-gray-200 rounded px-2 py-1 outline-none"
            aria-label="Select city"
          >
            {weatherCities.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        {loading || !weather ? (
          <div className="flex items-center justify-center py-6 text-gray-400">
            <Loader2 className="h-5 w-5 animate-spin" />
            <span className="ml-2 text-sm">Loading weather...</span>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center text-sm text-gray-300 mb-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{weather.location}</span>
                </div>
                <div className="text-3xl font-bold text-white tabular-nums">{weather.temperature}°C</div>
                <div className="text-sm text-gray-300">{weather.condition}</div>
              </div>
              <div>{getWeatherIcon(weather.condition)}</div>
            </div>
            <div className="mt-3 pt-3 border-t border-blue-800 grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="text-xs text-gray-400">Humidity</div>
                <div className="text-sm font-medium text-gray-200">{weather.humidity}%</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Wind</div>
                <div className="text-sm font-medium text-gray-200">{weather.windSpeed} km/h</div>
              </div>
              <div>
                <div className="text-xs text-gray-400">Feels</div>
                <div className="text-sm font-medium text-gray-200">{weather.feelsLike}°C</div>
              </div>
            </div>
            {weather.forecast && (
              <div className="mt-3 pt-3 border-t border-blue-800 grid grid-cols-3 gap-2 text-center">
                {weather.forecast.map((f) => (
                  <div key={f.day}>
                    <div className="text-[11px] text-gray-500">{f.day}</div>
                    <div className="text-xs text-gray-200">
                      {f.high}° <span className="text-gray-500">{f.low}°</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  )
}
