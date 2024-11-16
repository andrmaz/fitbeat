'use client'
import {useEffect, useState} from 'react'
import dynamic from 'next/dynamic'
import {Button} from '@/ui/components/button'
import {InputEmail} from './_components/InputEmail'
import {getUserMetadata, loginWithMagicLink} from '@/lib/auth.client'
import {validateToken} from '@/lib/auth.server'
import {useRouter} from 'next/navigation'
import {useUserContext} from '@/shared/user.context'

function AuthenticationForm() {
  const router = useRouter()
  const [user, setUser] = useUserContext()

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    // Check for an issuer on our user object. If it exists, route them to the dashboard.
    if (user?.issuer) router.push('/dashboard')
  }, [router, user])

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value)
  }
  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      const token = await loginWithMagicLink(email)
      if (!token) return
      validateToken(token)
      const user = await getUserMetadata()
      console.debug(user)
      if (user && user.email && user.issuer) {
        setUser({email: user?.email, issuer: user.issuer})
        setMessage('Successfully logged')
        router.push('/dashboard')
      }
    } catch (error) {
      console.error(error)
      if (error instanceof Error) {
        setMessage(error.message)
      } else {
        setMessage('An error occurred')
      }
    }
  }

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Get Started</h1>
      <form className='flex flex-col gap-4' onSubmit={onSubmit}>
        <InputEmail email={email} onChange={onEmailChange} />
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
