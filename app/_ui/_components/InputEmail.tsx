import {Input} from '@/ui/components/input'

export function InputEmail() {
  return (
    <>
      <label htmlFor='email'>Email</label>
      <Input
        type='email'
        placeholder='example@email'
        name='email'
        id='email'
        required
        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
      />
    </>
  )
}
