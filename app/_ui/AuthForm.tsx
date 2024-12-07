import {Button} from '@/ui/components/button'
import {InputEmail} from './_components/InputEmail'
import {signIn} from '@/lib/auth'
import {z} from 'zod'

const emailSchema = z.object({
  email: z.string().email('Invalid email address')
})

export default async function AuthenticationForm() {
  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold'>Get Started</h1>
      <form
        className='flex flex-col gap-4'
        action={async formData => {
          'use server'
          const email = formData.get('email')?.toString() || ''
          const result = emailSchema.safeParse({ email })

          if (!result.success) {
            console.error(result.error.errors)
            return
          }
          await signIn('resend', formData)
        }}
      >
        <InputEmail />
        <Button type='submit' variant='outline' className='w-full'>
          Submit
        </Button>
      </form>
    </div>
  )
}
