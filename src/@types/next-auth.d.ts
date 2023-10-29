import { DefaultSession, DefaultUser } from 'next-auth'

declare module 'next-auth/jwt' {
  interface JWT {
    role?: string | null
  }
}

declare module 'next-auth/adapters' {
  interface AdapterUser {
    role?: string | null
  }
}

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & {
      role?: string | null
    }
  }

  interface User {
    role?: string | null
  }
}
