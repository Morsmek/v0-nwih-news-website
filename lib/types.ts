export interface Article {
  id: string
  title: string
  description: string
  content: string
  author: string
  authorTitle?: string
  publishedAt: string
  category: string
  imageUrl: string
  imageCaption?: string
  source?: string
  url?: string
  tags?: string[]
  breaking?: boolean
  featured?: boolean
  views?: number
  readTime?: number
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

export interface LiveUpdate {
  id: string
  time: string
  datetime: string
  title: string
  body: string
  tag?: string
}

export interface Job {
  id: string
  title: string
  location: string
  team: string
  type: string
  summary: string
}

export interface NavItem {
  name: string
  href: string
}
