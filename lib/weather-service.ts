import type { WeatherData } from "./types"

// Mock weather data for demonstration
// In a real application, this would be replaced with API calls to a weather service
const mockWeatherData: Record<string, WeatherData> = {
  // European cities
  Brussels: {
    location: "Brussels",
    temperature: 14,
    feelsLike: 12,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    forecast: [
      { day: "Today", high: 14, low: 8, condition: "Partly Cloudy" },
      { day: "Tomorrow", high: 16, low: 9, condition: "Sunny" },
      { day: "Wednesday", high: 15, low: 10, condition: "Cloudy" },
    ],
  },
  Paris: {
    location: "Paris",
    temperature: 16,
    feelsLike: 15,
    condition: "Sunny",
    humidity: 55,
    windSpeed: 8,
    forecast: [
      { day: "Today", high: 16, low: 10, condition: "Sunny" },
      { day: "Tomorrow", high: 18, low: 11, condition: "Sunny" },
      { day: "Wednesday", high: 17, low: 12, condition: "Partly Cloudy" },
    ],
  },
  Berlin: {
    location: "Berlin",
    temperature: 12,
    feelsLike: 10,
    condition: "Cloudy",
    humidity: 70,
    windSpeed: 15,
    forecast: [
      { day: "Today", high: 12, low: 7, condition: "Cloudy" },
      { day: "Tomorrow", high: 14, low: 8, condition: "Partly Cloudy" },
      { day: "Wednesday", high: 13, low: 9, condition: "Rain" },
    ],
  },
  London: {
    location: "London",
    temperature: 13,
    feelsLike: 11,
    condition: "Light Rain",
    humidity: 80,
    windSpeed: 18,
    forecast: [
      { day: "Today", high: 13, low: 9, condition: "Light Rain" },
      { day: "Tomorrow", high: 14, low: 10, condition: "Cloudy" },
      { day: "Wednesday", high: 15, low: 11, condition: "Partly Cloudy" },
    ],
  },
  Madrid: {
    location: "Madrid",
    temperature: 22,
    feelsLike: 23,
    condition: "Sunny",
    humidity: 40,
    windSpeed: 10,
    forecast: [
      { day: "Today", high: 22, low: 14, condition: "Sunny" },
      { day: "Tomorrow", high: 24, low: 15, condition: "Sunny" },
      { day: "Wednesday", high: 25, low: 16, condition: "Sunny" },
    ],
  },
  Rome: {
    location: "Rome",
    temperature: 20,
    feelsLike: 21,
    condition: "Sunny",
    humidity: 45,
    windSpeed: 8,
    forecast: [
      { day: "Today", high: 20, low: 13, condition: "Sunny" },
      { day: "Tomorrow", high: 22, low: 14, condition: "Sunny" },
      { day: "Wednesday", high: 23, low: 15, condition: "Partly Cloudy" },
    ],
  },
}

// Function to get weather by city name
export async function getWeatherByCity(city: string): Promise<WeatherData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Check if we have mock data for this city
  const cityData = mockWeatherData[city]
  if (cityData) {
    return cityData
  }

  // If no mock data, return Brussels as default
  return mockWeatherData["Brussels"]
}

// Function to get weather by coordinates
export async function getWeatherByCoordinates(latitude: number, longitude: number): Promise<WeatherData> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  // In a real application, we would call a weather API with these coordinates
  // For this demo, we'll return a random European city's weather
  const cities = Object.keys(mockWeatherData)
  const randomCity = cities[Math.floor(Math.random() * cities.length)]

  // Add a small variation to make it look like it's based on coordinates
  const weatherData = { ...mockWeatherData[randomCity] }
  weatherData.temperature = Math.round(weatherData.temperature + (Math.random() * 4 - 2))
  weatherData.feelsLike = Math.round(weatherData.feelsLike + (Math.random() * 4 - 2))
  weatherData.humidity = Math.min(100, Math.max(30, weatherData.humidity + Math.round(Math.random() * 10 - 5)))
  weatherData.windSpeed = Math.max(0, weatherData.windSpeed + Math.round(Math.random() * 6 - 3))

  // Set location based on coordinates (in a real app, we would use reverse geocoding)
  weatherData.location = `Near ${weatherData.location}`

  return weatherData
}
