export interface Article {
  id: string
  title: string
  description: string
  content: string
  author: string
  publishedAt: string
  category: string
  imageUrl: string
  imageCaption?: string
  source?: string
  url?: string
}

export interface WeatherData {
  location: string
  temperature: number
  feelsLike: number
  condition: string
  humidity: number
  windSpeed: number
  forecast?: WeatherForecast[]
}

export interface WeatherForecast {
  day: string
  high: number
  low: number
  condition: string
}

export interface VideoNews {
  id: string
  title: string
  description: string
  thumbnailUrl: string
  videoUrl: string
  duration: string
  publishedAt: string
  category: string
  views: number
  featured?: boolean
  author: string
}
