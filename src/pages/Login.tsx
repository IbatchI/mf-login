import { LoginInfo } from '../types'
import useUserInfo from '../store'
import LoginForm from '../components/LoginForm/LoginForm'

export const Login = () => {
  const [, setUserInfo] = useUserInfo()

  const handleSubmit = async ({ userName }: LoginInfo) => {
    // await api.login(email, password)
    // console.log({ userName, password })
    // La api nos devuelve tal estado
    setUserInfo({
      userName,
      token: 'elToken',
      id: 1,
      name: 'Lucas',
      lastaName: 'Hernandez',
    })
  }

  return <LoginForm handleSubmit={handleSubmit} />
}

export default Login
