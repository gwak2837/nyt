'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { match } from 'ts-pattern'
import ScrapIcon from '@/svg/ScrapIcon'
import HomeIcon from '@/svg/HomeIcon'

type Props = {
  href?: NavigationURL
}

export default function NavLink({ href = '/' }: Props) {
  const pathname = usePathname()

  const labelStyle = `text-[10px] leading-3 ${pathname === href ? '' : 'text-[#6D6D6D]'}`

  return (
    <Link href={href} className="grid gap-[9px] p-4 text-center">
      {match(href)
        .with('/', () => (
          <>
            <HomeIcon width="24" className="mx-auto" selected={pathname === href} />
            <label className={labelStyle}>홈</label>
          </>
        ))
        .with('/scrap', () => (
          <>
            <ScrapIcon width="24" className="mx-auto" selected={pathname === href} />
            <label className={labelStyle}>스크랩</label>
          </>
        ))
        .otherwise(() => null)}
    </Link>
  )
}

const navigationURL = ['/', '/scrap'] as const

type NavigationURL = (typeof navigationURL)[number]
