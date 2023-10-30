import { LoginInfo } from '../types'
import LoginForm from '../components/LoginForm/LoginForm'
import storageMethods from '../utils/AuthStore'

export const Login = () => {
  const handleSubmit = async ({ userName }: LoginInfo) => {
    // await api.login(email, password)
    // console.log({ userName, password })
    // La api nos devuelve tal estado
    storageMethods.setToken('ajosrnasokd3k423o5i23ojndasjfn2130i')
    storageMethods.setUserInfo({
      id: 1,
      userName,
      name: 'Lucas',
      lastaName: 'Hernandez',
    })
  }

  return <LoginForm handleSubmit={handleSubmit} />
}

export default Login
