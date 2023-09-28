import { ChangeEvent, FormEvent, useState } from 'react'

import { LoginInfo } from '../../types'

import styles from './LoginForm.module.scss'

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
    <form className={styles.form} onSubmit={onSubmitLogin}>
      <input
        className={styles.input}
        name='username'
        onChange={onChangeUserName}
        value={userName}
      />
      <input
        className={styles.input}
        name='password'
        onChange={onChangePassword}
        value={password}
      />
      <button className={styles.button} type='submit'>
        Log in
      </button>
    </form>
  )
}

export default LoginForm
