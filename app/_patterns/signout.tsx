import {signOut} from '@/lib/auth'
import {Button} from '@/ui/components/button'
import {LogOut} from 'lucide-react'

export function Signout() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <Button
        type='submit'
        className='cursor-pointer text-red-600 focus:text-red-600'
      >
        <LogOut className='mr-2 h-4 w-4' />
        <span>Sign out</span>
      </Button>
    </form>
  )
}
