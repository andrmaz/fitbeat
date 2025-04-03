import {signIn} from '@/lib/auth'
import {z} from 'zod'

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
})

interface SigninProps {
  provider: string
}

export default async function Signin(props: SigninProps) {
  return (
    <form
      className='flex flex-col gap-4'
      action={async formData => {
        'use server'
        const email = formData.get('email')?.toString() || ''
        const result = emailSchema.safeParse({email})

        if (!result.success) {
          console.error(result.error.errors)
          return
        }
        await signIn(props.provider, formData)
      }}
    >
      <fieldset>
        <legend>Get Started</legend>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          placeholder='example@email'
          name='email'
          id='email'
          required
        />
      </fieldset>
      <input type='submit' value='Submit' />
    </form>
  )
}
