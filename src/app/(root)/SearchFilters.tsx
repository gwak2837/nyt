'use client'

import dayjs from 'dayjs'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, type ReactNode, type DOMAttributes } from 'react'

import styles from './date-input.module.css'

import Modal from '@/components/atoms/Modal'
import CalendarIcon from '@/svg/CalendarIcon'
import 돋보기Icon from '@/svg/돋보기Icon'

export default function SearchFilters() {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const searchParams = useSearchParams()
  const headline = searchParams.get('headline')
  const publicationDate = searchParams.get('publicationDate')
  const countries = searchParams.getAll('countries')

  const router = useRouter()

  function updateQuerystring() {}

  return (
    <div className="sticky top-0  border-b border-[#C4C4C4] bg-white px-[20px] py-[13px]">
      <div className="flex gap-[7px] overflow-x-auto">
        <Filter onClick={() => setIsModalOpened(true)} selected={Boolean(headline)}>
          <돋보기Icon width="16" selected={Boolean(headline)} />
          <span
            className={`leading overflow-hidden text-ellipsis whitespace-nowrap text-[14px] leading-6 ${
              headline ? 'text-[#3478F6]' : 'text-[#6D6D6D]'
            }`}
          >
            {headline || '전체 헤드라인'}
          </span>
        </Filter>
        <Filter onClick={() => setIsModalOpened(true)} selected={Boolean(publicationDate)}>
          <CalendarIcon width="16" color={publicationDate ? '#3478F6' : '#6D6D6D'} />
          <span className={`leading text-[14px] leading-6 ${publicationDate ? 'text-[#3478F6]' : 'text-[#6D6D6D]'}`}>
            {publicationDate ? dayjs(publicationDate).format('YYYY-MM-DD') : '전체 날짜'}
          </span>
        </Filter>
        <Filter onClick={() => setIsModalOpened(true)} selected={countries.length > 0}>
          <span
            className={`leading text-[14px] leading-6 ${countries.length > 0 ? 'text-[#3478F6]' : 'text-[#6D6D6D]'}`}
          >
            {countries.length > 0
              ? countries.length > 1
                ? `${countries[0]} 외 ${countries.length - 1}개`
                : countries[0]
              : '전체 국가'}
          </span>
        </Filter>
      </div>
      <Modal open={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <div className="m-5 max-w-[335px] rounded-2xl bg-white p-5 text-sm leading-6 shadow-xl">
          <form className="grid gap-10" onSubmit={updateQuerystring}>
            <div className="grid gap-2">
              <label className="text-base font-semibold tracking-[-0.05em]">헤드라인</label>
              <input
                required
                className="w-full rounded-lg border border-[#C4C4C4] px-5 py-[10px]"
                placeholder="검색하실 헤드라인을 입력해주세요."
              />
            </div>
            <div className="relative grid gap-2">
              <label className="text-base font-semibold tracking-[-0.05em]">날짜</label>
              <div className={styles.placeholder}>
                <input
                  type="date"
                  required
                  className="w-full rounded-lg border border-[#C4C4C4] px-5 py-[10px]"
                  data-placeholder="날짜를 선택해주세요."
                />
              </div>
              <CalendarIcon
                className="top pointer-events-none absolute right-6 top-12 z-10 bg-white"
                width="16"
                color={publicationDate ? '#3478F6' : '#6D6D6D'}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-base font-semibold tracking-[-0.05em]">국가</label>
              <div className="flex flex-wrap gap-2">
                {glocationCodes.map((code) => (
                  <label
                    key={code}
                    className="rounded-full border border-[#F2F2F2] bg-[#82B0F4] px-[11px] py-1 tracking-[-0.04em] text-white"
                  >
                    {glocations[code]}
                    <input className="hidden" />
                  </label>
                ))}
              </div>
            </div>
            <button
              className="w-full rounded-2xl bg-[#3478F6] p-[18px] text-base font-semibold tracking-[-5%] text-white"
              type="submit"
            >
              필터 적용하기
            </button>
          </form>
        </div>
      </Modal>
    </div>
  )
}

type Props = {
  children: ReactNode
  onClick: DOMAttributes<HTMLDivElement>['onClick']
  selected: boolean
}

function Filter({ children, onClick, selected }: Props) {
  return (
    <div
      className={`flex max-w-xs cursor-pointer items-center gap-1 whitespace-nowrap rounded-full border border-[#C4C4C4] px-3 py-1 ${
        selected ? 'border-[#82B0F4]' : 'border-[#C4C4C4]'
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

const glocations = {
  'South Korea': '대한민국',
  China: '중국',
  Japan: '일본',
  'United States': '미국',
  'North Korea': '북한',
  Russia: '러시아',
  France: '프랑스',
  'Great Britain': '영국',
} as const

const glocationCodes = Object.keys(glocations) as unknown as (keyof typeof glocations)[]
