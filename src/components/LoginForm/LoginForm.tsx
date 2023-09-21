import { ChangeEvent, FormEvent, useState } from 'react'

import { LoginInfo } from '../../types'
import './LoginForm.scss'

interface LoginProps {
  handleSubmit: (arg0: LoginInfo) => Promise<void>
}

export const LoginForm = ({ handleSubmit }: LoginProps) => {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onSubmitLogin = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    handleSubmit({
      userName,
      password,
    })
  }

  const onChangeUserName = (evt: ChangeEvent<HTMLInputElement>) => {
    setUserName(evt.target.value)
  }

  const onChangePassword = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
  }

  return (
    <form onSubmit={onSubmitLogin}>
      <input name='username' onChange={onChangeUserName} value={userName} />
      <input name='password' onChange={onChangePassword} value={password} />
      <button type='submit'>Log in</button>
    </form>
  )
}

export default LoginForm
