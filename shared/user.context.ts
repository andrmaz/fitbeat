import { createContext, useContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'

export type TUser = { email: string, issuer: string }
export type TUserContext = [
    Readonly<TUser | null>,
    Dispatch<SetStateAction<TUser | null>>,
]
export const UserContext = createContext<TUserContext | null>(null)
export function useUserContext() {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUserContext must be used within a UserContext.Provider')
    }
    return context
}