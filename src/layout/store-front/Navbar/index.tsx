'use client'

import { User } from './User'

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white px-4 py-4 dark:bg-slate-900 sm:px-6 lg:px-8">
      <nav className="mx-auto flex w-full max-w-7xl flex-row items-center">
        <div className="ml-auto">
          <User />
        </div>
      </nav>
    </div>
  )
}
