import { atom, useAtom } from 'jotai'

import { UserInfo } from './types'

const userInfoAtom = atom<UserInfo>({} as UserInfo)

export const useUserInfo = () => useAtom(userInfoAtom)

export default useUserInfo
