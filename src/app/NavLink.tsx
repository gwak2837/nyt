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

  return (
    <Link href={href} className="grid gap-[9px] p-4 text-center">
      {match(href)
        .with('/', () => (
          <>
            <HomeIcon width="24" className="mx-auto" selected={pathname === href} />
            <span className={pathname === href ? '' : 'text-[#6D6D6D]'}>홈</span>
          </>
        ))
        .with('/scrap', () => (
          <>
            <ScrapIcon width="24" className="mx-auto" selected={pathname === href} />
            <span className={pathname === href ? '' : 'text-[#6D6D6D]'}>스크랩</span>
          </>
        ))
        .otherwise(() => null)}
    </Link>
  )
}

const navigationURL = ['/', '/scrap'] as const

type NavigationURL = (typeof navigationURL)[number]
