import {
  SessionProvider as Provider,
  type SessionProviderProps,
} from 'next-auth/react'
import type { FC, PropsWithChildren } from 'react'

type Props = PropsWithChildren<{
  session: SessionProviderProps['session']
}>

export const SessionProvider: FC<Props> = ({ children, session }) => {
  return <Provider session={session}>{children}</Provider>
}
