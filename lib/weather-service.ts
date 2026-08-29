import type { WeatherData } from "./types"

const mockWeatherData: Record<string, WeatherData> = {
  Brussels: {
    location: "Brussels",
    temperature: 22,
    feelsLike: 21,
    condition: "Partly Cloudy",
    humidity: 58,
    windSpeed: 14,
    forecast: [
      { day: "Today", high: 23, low: 15, condition: "Partly Cloudy" },
      { day: "Sun", high: 25, low: 16, condition: "Sunny" },
      { day: "Mon", high: 24, low: 16, condition: "Cloudy" },
    ],
  },
  Paris: {
    location: "Paris",
    temperature: 26,
    feelsLike: 26,
    condition: "Sunny",
    humidity: 48,
    windSpeed: 10,
    forecast: [
      { day: "Today", high: 27, low: 17, condition: "Sunny" },
      { day: "Sun", high: 28, low: 18, condition: "Sunny" },
      { day: "Mon", high: 26, low: 17, condition: "Partly Cloudy" },
    ],
  },
  Berlin: {
    location: "Berlin",
    temperature: 23,
    feelsLike: 22,
    condition: "Cloudy",
    humidity: 62,
    windSpeed: 16,
    forecast: [
      { day: "Today", high: 24, low: 15, condition: "Cloudy" },
      { day: "Sun", high: 25, low: 16, condition: "Partly Cloudy" },
      { day: "Mon", high: 22, low: 14, condition: "Rain" },
    ],
  },
  London: {
    location: "London",
    temperature: 20,
    feelsLike: 19,
    condition: "Light Rain",
    humidity: 78,
    windSpeed: 18,
    forecast: [
      { day: "Today", high: 21, low: 14, condition: "Light Rain" },
      { day: "Sun", high: 22, low: 15, condition: "Cloudy" },
      { day: "Mon", high: 23, low: 15, condition: "Partly Cloudy" },
    ],
  },
  Madrid: {
    location: "Madrid",
    temperature: 33,
    feelsLike: 34,
    condition: "Sunny",
    humidity: 28,
    windSpeed: 12,
    forecast: [
      { day: "Today", high: 34, low: 22, condition: "Sunny" },
      { day: "Sun", high: 35, low: 23, condition: "Sunny" },
      { day: "Mon", high: 33, low: 22, condition: "Sunny" },
    ],
  },
  Rome: {
    location: "Rome",
    temperature: 31,
    feelsLike: 32,
    condition: "Sunny",
    humidity: 42,
    windSpeed: 9,
    forecast: [
      { day: "Today", high: 32, low: 21, condition: "Sunny" },
      { day: "Sun", high: 33, low: 22, condition: "Sunny" },
      { day: "Mon", high: 31, low: 21, condition: "Partly Cloudy" },
    ],
  },
}

export const weatherCities = Object.keys(mockWeatherData)

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return mockWeatherData[city] ?? mockWeatherData.Brussels
}

export async function getWeatherByCoordinates(_latitude: number, _longitude: number): Promise<WeatherData> {
  await new Promise((resolve) => setTimeout(resolve, 250))
  return mockWeatherData.Brussels
}
