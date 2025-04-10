import {signOut} from '@/lib/auth'

export function Signout() {
  return (
    <form
      action={async () => {
        'use server'
        await signOut()
      }}
    >
      <input type='submit' value='Sign out' />
    </form>
  )
}
