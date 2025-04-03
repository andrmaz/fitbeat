import Link from 'next/link'
import {Signout} from '../_patterns/signout'
import {auth} from '@/lib/auth'

export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await auth()
  return (
    <main className='container'>
      <nav>
        <ul>
          <li>
            <strong>Acme Corp</strong>
          </li>
        </ul>
        <ul>
          <li>
            <Link href='#'>About</Link>
          </li>
          <li>
            <details className='dropdown'>
              <summary>{session?.user?.name}</summary>
              <ul dir='rtl'>
                <li>
                  <Signout />
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </nav>
      {children}
    </main>
  )
}
