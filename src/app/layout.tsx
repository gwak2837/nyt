import type { Metadata, Viewport } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/react'
import {
  CANONICAL_URL,
  APPLICATION_NAME,
  DESCRIPTION,
  APPLICATION_SHORT_NAME,
  AUTHOR,
  KEYWORDS,
  CATEGORY,
  THEME_COLOR,
} from '@/common/constants'
import ReactHotToast from '@/components/ReactHotToast'
import NavLink from '@/app/NavLink'
import 돋보기Icon from '@/svg/돋보기Icon'
import CalendarIcon from '@/svg/CalendarIcon'

export const metadata: Metadata = {
  metadataBase: new URL(CANONICAL_URL),
  title: APPLICATION_NAME,
  description: DESCRIPTION,
  applicationName: APPLICATION_SHORT_NAME,
  authors: [{ url: '', name: AUTHOR }],
  generator: null,
  keywords: KEYWORDS,
  referrer: 'strict-origin-when-cross-origin',
  robots: { index: true, follow: true },
  alternates: { canonical: CANONICAL_URL },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
    shortcut: '/shortcut-icon.png',
  },
  manifest: '/manifest.webmanifest',
  openGraph: {
    title: APPLICATION_NAME,
    description: DESCRIPTION,
    type: 'website',
    url: CANONICAL_URL,
    siteName: APPLICATION_NAME,
    locale: 'ko_KR',
    images: [{ url: '/images/og-image.webp', alt: `${APPLICATION_SHORT_NAME} 로고` }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [{ url: '/images/og-image.webp', alt: `${APPLICATION_SHORT_NAME} 로고` }],
  },
  appleWebApp: { title: APPLICATION_SHORT_NAME, capable: true, statusBarStyle: 'black' },
  formatDetection: { telephone: true, date: true, address: true, email: true, url: true },
  appLinks: { web: { url: CANONICAL_URL } },
  archives: CANONICAL_URL,
  assets: CANONICAL_URL,
  bookmarks: CANONICAL_URL,
  category: CATEGORY,
  classification: CATEGORY,
}

export const viewport: Viewport = {
  themeColor: THEME_COLOR,
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'light',
}

const myFont = localFont({
  src: './PretendardVariable.woff2',
  fallback: [
    'Pretendard',
    '-apple-system',
    'BlinkMacSystemFont',
    'system-ui',
    'Roboto',
    'Helvetica Neue',
    'Segoe UI',
    'Apple SD Gothic Neo',
    'Noto Sans KR',
    'Malgun Gothic',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
    'sans-serif',
  ],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className="text-base">
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color={THEME_COLOR} />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="subject" content={DESCRIPTION} />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="3 days" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <body className={myFont.className}>
        <div className="mx-auto flex min-h-[100dvh] max-w-[560px] flex-col">
          <div className="sticky top-0 flex gap-[7px] border-b border-[#C4C4C4] bg-white px-[20px] py-[13px]">
            <div className="flex items-center gap-1 rounded-full border border-[#C4C4C4] px-3 py-1">
              <돋보기Icon width="16" />
              <span className="leading text-[14px] leading-6">전체 헤드라인</span>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-[#C4C4C4]">
              <CalendarIcon width="16" color="#3478F6" />
              <span className="leading text-[14px] leading-6">전체 날짜</span>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-[#C4C4C4]">전체 국가</div>
          </div>
          <div className="grow">{children}</div>
          <div className="sticky bottom-0 bg-[#F0F1F4]">
            <nav className=" grid grid-cols-2 items-center rounded-[30px] bg-black text-white">
              <NavLink />
              <NavLink href="/scrap" />
            </nav>
          </div>
        </div>
        <div id="modal-root" />
        <ReactHotToast />
      </body>
      <Analytics />
    </html>
  )
}
