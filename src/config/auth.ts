import { PrismaAdapter } from '@auth/prisma-adapter'
import { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

import { prisma } from '@/lib/prismadb'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60, // 1 minute
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = { ...user }
      }

      return token
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user
      }

      return session
    },
  },
}
