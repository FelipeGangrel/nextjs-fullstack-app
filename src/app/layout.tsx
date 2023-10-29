import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession, Session } from 'next-auth'

import { LoginButton } from '@/components/client-side'
import { authOptions } from '@/config/auth'
import { cn } from '@/lib/styling'
import { SessionProvider } from '@/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  const session = await getServerSession(authOptions)

  console.log({ session })

  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className={cn(inter.className, 'flex flex-col min-h-screen')}>
          <div className="flex flex-row">
            <LoginButton />
          </div>
          {children}
        </body>
      </SessionProvider>
    </html>
  )
}
