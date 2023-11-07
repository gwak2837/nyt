'use client'

import dayjs from 'dayjs'
import { useSearchParams } from 'next/navigation'
import { useState, type ReactNode, type DOMAttributes } from 'react'

import Modal from '@/components/atoms/Modal'
import CalendarIcon from '@/svg/CalendarIcon'
import 돋보기Icon from '@/svg/돋보기Icon'

export default function SearchFilters() {
  const [isModalOpened, setIsModalOpened] = useState(false)

  const searchParams = useSearchParams()
  const headline = searchParams.get('headline')
  const publicationDate = searchParams.get('publicationDate')
  const countries = searchParams.getAll('countries')

  return (
    <div className="sticky top-0 flex gap-[7px] border-b border-[#C4C4C4] bg-white px-[20px] py-[13px]">
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
        <span className={`leading text-[14px] leading-6 ${countries.length > 0 ? 'text-[#3478F6]' : 'text-[#6D6D6D]'}`}>
          {countries.length > 0
            ? countries.length > 1
              ? `${countries[0]} 외 ${countries.length - 1}개`
              : countries[0]
            : '전체 국가'}
        </span>
      </Filter>
      <Modal open={isModalOpened} onClose={() => setIsModalOpened(false)}>
        <div className="rounded-2xl bg-white p-5 shadow-xl">
          <h3 className="my-1 text-lg font-medium">제출하기</h3>
          <div className="my-4">지금까지 푼 답안을 제출할까요?</div>
          <div className="flex justify-end gap-2">
            <button className="transition-color w-20 rounded-lg bg-violet-200 px-4 py-2 text-sm text-violet-700 duration-300 hover:bg-violet-300">
              좋아요
            </button>
            <button className="transition-color w-20 rounded-lg bg-neutral-200 px-4 py-2 text-sm text-neutral-700 duration-300 hover:bg-neutral-300">
              아니요
            </button>
          </div>
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
      className={`flex max-w-xs cursor-pointer items-center gap-1 rounded-full border border-[#C4C4C4] px-3 py-1 ${
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
}
