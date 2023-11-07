import { type ReactNode } from 'react'

import NavLink from '@/app/(root)/NavLink'
import SearchFilters from '@/app/(root)/SearchFilters'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-[560px] flex-col">
      <SearchFilters />
      <div className="grow">{children}</div>
      <div className="sticky bottom-0 bg-[#F0F1F4]">
        <nav className=" grid grid-cols-2 items-center rounded-[30px] bg-black text-white">
          <NavLink />
          <NavLink href="/scrap" />
        </nav>
      </div>
    </div>
  )
}
