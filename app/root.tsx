'use client'

import {isUserLoggedIn} from '@/lib/auth.client'
import {TUser, TUserContext, UserContext} from '@/shared/user.context'
import {useRouter} from 'next/navigation'
import {useEffect, useMemo, useState} from 'react'

export default function Root({children}: React.PropsWithChildren) {
  const router = useRouter()
  const [user, setUser] = useState<TUser | null>(null)

  useEffect(() => {
    // Check if the user is authenticated already
    isUserLoggedIn().then(isLoggedIn => {
      console.debug(isLoggedIn)
      if (isLoggedIn) {
        // route to dashboard
        router.push('/dashboard')
      } else {
        // If false, route them to the login page and reset the user state
        router.push('/')
        setUser(null)
      }
    })
    // Add an empty dependency array so the useEffect only runs once upon page load
  }, [router])

  const value = useMemo<TUserContext>(() => [user, setUser], [user, setUser])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
