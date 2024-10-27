import {Button} from '@/ui/components/button'
import {InputEmail} from './components/input-email'
import {authenticateUser} from '@/services/auth.server'

export function AuthenticationForm() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Get Started</h1>
      <form className='flex flex-col gap-4' action={authenticateUser}>
        <label htmlFor='email'>Email</label>
        <InputEmail />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
