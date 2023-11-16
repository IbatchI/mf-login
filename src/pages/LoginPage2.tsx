import { GenericSelect } from 'lh-my-first-storybook'

export const LoginPage2 = () => {
  return (
    <div>
      <GenericSelect
        options={[
          {
            value: 'hola',
            label: 'Hola',
          },
          {
            value: 'chau',
            label: 'Chau',
          },
        ]}
        placeholder='Prueba select'
      />
    </div>
  )
}

export default LoginPage2
