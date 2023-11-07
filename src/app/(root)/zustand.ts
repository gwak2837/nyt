import { produce } from 'immer'
import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ExamStore = {
  searchFilters: any
  setSearchFilter: any
}

export const useExamStore = create<ExamStore>()(
  devtools(
    persist(
      (set) => ({
        searchFilters: {},
        setSearchFilter: (/* searchFilter */) =>
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
