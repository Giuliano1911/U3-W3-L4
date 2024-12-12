import { Launch } from './Launch'
import { Event } from './Event'

export default interface News {
  id: number
  title: string
  url: string
  image_url: string
  news_site: string
  summary: string
  published_at: Date
  updated_at: Date
  featured: boolean
  launches: Launch[]
  events: Event[]
}
