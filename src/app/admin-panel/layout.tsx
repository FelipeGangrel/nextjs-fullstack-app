import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/config/auth'

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const session = await getServerSession(authOptions)

  if (session?.user?.role !== 'admin') {
    return redirect('/')
  }

  return <>{children}</>
}
