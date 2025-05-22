"use client"

import { useState, useEffect } from "react"
import { Cloud, CloudRain, CloudSnow, Sun, Loader2, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getWeatherByCoordinates, getWeatherByCity } from "@/lib/weather-service"
import type { WeatherData } from "@/lib/types"

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [locationName, setLocationName] = useState<string>("Your Location")

  useEffect(() => {
    fetchWeatherData()
  }, [])

  const fetchWeatherData = async () => {
    setLoading(true)
    setError(null)

    try {
      // Try to get user's location
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords
            try {
              const weatherData = await getWeatherByCoordinates(latitude, longitude)
              setWeather(weatherData)
              setLocationName(weatherData.location)
              setLoading(false)
            } catch (err) {
              console.error("Error fetching weather data:", err)
              // Fallback to default location
              fetchDefaultWeather()
            }
          },
          (err) => {
            console.error("Geolocation error:", err)
            // Fallback to default location
            fetchDefaultWeather()
          },
        )
      } else {
        // Geolocation not supported
        fetchDefaultWeather()
      }
    } catch (err) {
      console.error("Weather widget error:", err)
      setError("Unable to load weather information")
      setLoading(false)
    }
  }

  const fetchDefaultWeather = async () => {
    try {
      // Default to a major European city
      const weatherData = await getWeatherByCity("Brussels")
      setWeather(weatherData)
      setLocationName("Brussels")
      setLoading(false)
    } catch (err) {
      console.error("Error fetching default weather:", err)
      setError("Unable to load weather information")
      setLoading(false)
    }
  }

  const getWeatherIcon = (condition: string) => {
    const lowerCondition = condition.toLowerCase()
    if (lowerCondition.includes("rain") || lowerCondition.includes("drizzle")) {
      return <CloudRain className="h-8 w-8 text-blue-400" />
    } else if (lowerCondition.includes("snow")) {
      return <CloudSnow className="h-8 w-8 text-blue-200" />
    } else if (lowerCondition.includes("cloud")) {
      return <Cloud className="h-8 w-8 text-gray-400" />
    } else {
      return <Sun className="h-8 w-8 text-yellow-500" />
    }
  }

  if (loading) {
    return (
      <Card className="bg-blue-900/20 border border-blue-900/30">
        <CardContent className="p-4 flex justify-center items-center">
          <Loader2 className="h-5 w-5 animate-spin text-gray-300" />
          <span className="ml-2 text-sm text-gray-300">Loading weather...</span>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="bg-blue-900/20 border border-blue-900/30">
        <CardContent className="p-4">
          <p className="text-sm text-red-400">{error}</p>
          <Button
            variant="outline"
            size="sm"
            className="mt-2 border-blue-800 text-gray-300 hover:bg-blue-900/50"
            onClick={fetchWeatherData}
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    )
  }

  if (!weather) return null

  return (
    <Card className="bg-gradient-to-br from-blue-900/40 to-blue-950/60 border border-blue-900/30">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center text-sm text-gray-300 mb-1">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{locationName}</span>
            </div>
            <div className="text-2xl font-bold text-white">{weather.temperature}°C</div>
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
            <div className="text-xs text-gray-400">Feels Like</div>
            <div className="text-sm font-medium text-gray-200">{weather.feelsLike}°C</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
