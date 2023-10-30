import { redirect } from 'next/navigation'

import { getServerSession } from '@/lib/session'

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  const session = await getServerSession()

  if (session?.user?.role !== 'admin') {
    return redirect('/')
  }

  return <>{children}</>
}
