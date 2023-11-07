import { produce } from 'immer'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ExamStore = {
  scrapingArticleIds: string[]
}

export const useExamStore = create<ExamStore>()(
  devtools(
    persist(
      (set) => ({
        scrapingArticleIds: [],
        toggleScrapingArticleId: (/* scrapingArticleId */) =>
          set(
            produce((state: ExamStore) => {
              // state.searchFilters[examId] = questions
            }),
          ),
      }),
      { name: 'searchFilters' },
    ),
  ),
)
