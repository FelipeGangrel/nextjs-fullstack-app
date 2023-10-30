import type { Metadata } from 'next'

import { Footer, Main, Navbar } from '@/layout/store-front'

export const metadata: Metadata = {
  title: 'Full Stack Store',
  description: 'Your one stop shop for all your full stack needs',
}

type Props = {
  children: React.ReactNode
}

export default async function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}
