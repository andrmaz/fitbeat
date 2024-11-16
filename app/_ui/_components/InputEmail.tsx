import {Input} from '@/ui/components/input'

interface InputEmailProps {
  email: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputEmail({email, onChange}: InputEmailProps) {
  return (
    <>
      <label htmlFor='email'>Email</label>
      <Input
        type='email'
        placeholder='Email'
        name='email'
        id='email'
        value={email}
        onChange={onChange}
      />
    </>
  )
}
