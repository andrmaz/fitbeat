'use client'
import dynamic from 'next/dynamic'
import {Button} from '@/ui/components/button'
import {InputEmail} from './components/InputEmail'
import {loginSucceed} from '@/lib/auth.client'
import {/* useActionState,  */ useState} from 'react'

function AuthenticationForm() {
  const [message] = useState('')
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    /* const email = event.currentTarget.email
    console.info(email) */
    const didToken = await loginSucceed()
    // Handle the didToken
    console.info(didToken)
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Get Started</h1>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <InputEmail />
        <Button type='submit'>Submit</Button>
        <p aria-live='polite' className='sr-only' role='status'>
          {message}
        </p>
      </form>
    </div>
  )
}

export default dynamic(() => Promise.resolve(AuthenticationForm), {
  ssr: false,
})
