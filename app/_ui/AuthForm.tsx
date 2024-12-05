import {Button} from '@/ui/components/button'
import {InputEmail} from './_components/InputEmail'
import {signIn} from '@/lib/auth'

export default async function AuthenticationForm() {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Get Started</h1>
      <form
        className='flex flex-col gap-4'
        action={async formData => {
          'use server'
          await signIn('resend', formData)
        }}
      >
        <InputEmail />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  )
}
