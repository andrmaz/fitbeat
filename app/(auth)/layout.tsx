import Link from 'next/link'
import Image from 'next/image'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/ui/components/dropdown'
import {User, Settings, HelpCircle} from 'lucide-react'
import {Signout} from '../_patterns/signout'
import {auth} from '@/lib/auth'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <main className='mx-auto h-full'>
      <div className='lg:flex'>
        <div className='hidden lg:block lg:w-64 lg:fixed lg:inset-y-0 bg-gray-50 border-r'>
          <div className='flex flex-col h-full'>
            <div className='p-4'>
              <h2 className='text-2xl font-bold text-gray-900'>FitBeat</h2>
            </div>
            <nav className='mt-8 flex-1 px-4 space-y-1'>
              <Link
                href='/dashboard'
                className='flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-md'
              >
                <span className='ml-3'>Home</span>
              </Link>
              <Link
                href='/training'
                className='flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-md'
              >
                <span className='ml-3'>Training</span>
              </Link>
              <Link
                href='/goals'
                className='flex items-center px-2 py-2 text-gray-600 hover:bg-gray-100 rounded-md'
              >
                <span className='ml-3'>Goals</span>
              </Link>
            </nav>
            <div className='p-4 border-t'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className='flex items-center w-full hover:bg-gray-100 rounded-md p-2 transition-colors'>
                    <div className='h-8 w-8 rounded-full bg-gray-300 relative overflow-hidden'>
                      <Image
                        src='/placeholder.svg?height=100&width=100'
                        alt='Profile'
                        fill
                        className='object-cover'
                      />
                    </div>
                    <div className='ml-3 text-left'>
                      <p className='text-sm font-medium text-gray-900'>
                        {session?.user?.name}
                      </p>
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end' className='w-56'>
                  <DropdownMenuItem asChild>
                    <Link href='/profile' className='cursor-pointer'>
                      <User className='mr-2 h-4 w-4' />
                      <span>Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href='/settings' className='cursor-pointer'>
                      <Settings className='mr-2 h-4 w-4' />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href='/help' className='cursor-pointer'>
                      <HelpCircle className='mr-2 h-4 w-4' />
                      <span>Help</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <Signout />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:pl-64 w-full'>
        <div className='max-w-md mx-auto lg:max-w-full'>{children}</div>
      </div>
    </main>
  )
}
