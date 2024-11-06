'use client'
import {Input} from '@/ui/components/input'

export function InputEmail() {
  return (
    <>
      <label htmlFor='email'>Email</label>
      <Input type='email' placeholder='Email' name='email' id='email' />
    </>
  )
}
