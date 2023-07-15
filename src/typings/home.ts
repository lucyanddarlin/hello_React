export interface IHighScore {
  _id: string
  type: string
  title: string
  subtitle: string
  list: Array<IHighScoreItem>
}

export interface IHighScoreItem {
  id: string
  picture_url: string
  verify_info: any
  name: string
  price: number
  price_format: string
  star_rating: number
  star_rating_color: string
  reviews_count: number
  reviews?: any[]
  bottom_info?: any
  lat: number
  lng: number
  image_url: string
}