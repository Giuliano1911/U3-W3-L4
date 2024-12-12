import News from './News'

export default interface Response {
  count: number
  next: string
  previous: string | null
  results: News[]
}
