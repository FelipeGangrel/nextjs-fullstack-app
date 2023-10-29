import { signIn, signOut, useSession } from 'next-auth/react'

export const LoginButton = () => {
  const { data, status } = useSession()

  if (status === 'authenticated') {
    return <button onClick={() => signOut()}>{data.user.name} Sign out</button>
  }

  if (status === 'loading') {
    return <button disabled>Loading...</button>
  }

  return <button onClick={() => signIn('google')}>Sign in</button>
}
