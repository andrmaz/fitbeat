import {Input} from '@/ui/components/input'

export function InputEmail() {
  return (
    <>
      <label htmlFor='email'>Email</label>
      <Input type='email' placeholder='example@email' name='email' id='email' />
    </>
  )
}
