import { ChangeEvent, FormEvent, useState } from 'react'
import { Button, Input } from 'lh-my-first-storybook'

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
      <Input name='username' onChange={onChangeUserName} placeholder='Username' value={userName} />
      <Input name='password' onChange={onChangePassword} placeholder='Password' value={password} />
      <Button onClick={() => {}} type='submit' variant='danger' width={'100%'}>
        Log in
      </Button>
    </form>
  )
}

export default LoginForm
