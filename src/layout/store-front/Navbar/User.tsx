import { signIn, signOut, useSession } from 'next-auth/react'

export const User = () => {
  const { data, status } = useSession()

  if (status === 'unauthenticated') {
    return <button onClick={() => signIn('google')}>Login</button>
  }

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return <button onClick={() => signOut()}>Logout</button>
}
