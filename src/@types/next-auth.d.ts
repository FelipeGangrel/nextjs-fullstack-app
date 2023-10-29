import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    role: string
  }
}

declare module 'next-auth' {
  interface Session {
    user: {
      role: string
    } & DefaultSession['user']
  }

  interface DefaultUser {
    role: string
  }
}
