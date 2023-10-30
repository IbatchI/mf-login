import { UserInfo } from '../types'

export interface StorageMethods {
  getToken: () => string
  getUserInfo: () => Record<string, unknown>
  setToken: (arg: string) => void
  setUserInfo: (arg: UserInfo) => void
}

const accesTokenKey = 'accessToken'
const userInfoKey = 'userInfo'

export const storageMethods: StorageMethods = {
  // Getters
  getToken: () => localStorage.getItem(accesTokenKey) || '',
  getUserInfo: () => localStorage.getItem(userInfoKey) || {},

  // Setters
  setToken: (token: string) => {
    localStorage.setItem(accesTokenKey, token)
  },
  setUserInfo: (userInfo: UserInfo) => {
    localStorage.setItem(userInfoKey, JSON.stringify(userInfo))
  },
}

export default storageMethods
