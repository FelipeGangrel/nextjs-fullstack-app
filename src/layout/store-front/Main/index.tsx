import type { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Main: FC<Props> = ({ children }) => {
  return (
    <main className="mx-auto min-h-[2000px] w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
      {children}
    </main>
  )
}
