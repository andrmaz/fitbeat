import {Button} from '@/ui/components/button'
import {signIn} from '@/lib/auth'
import {Input} from '@/ui/components/input'
import {z} from 'zod'

const emailSchema = z.object({
  email: z.string().email('Invalid email address'),
})

interface SigninProps {
  provider: string
}

export default async function Signin(props: SigninProps) {
  return (
    <div className='max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-2xl font-bold'>Get Started</h1>
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
        <label htmlFor='email'>Email</label>
        <Input
          type='email'
          placeholder='example@email'
          name='email'
          id='email'
          required
          className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <Button type='submit' variant='outline' className='w-full'>
          Submit
        </Button>
      </form>
    </div>
  )
}
