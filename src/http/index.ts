import { IHighScore } from '@/typings/home'
import axios from './axios'

export const reqTest = () =>
  axios<IHighScore>({
    url: '/home/highscore',
    method: 'GET',
  })