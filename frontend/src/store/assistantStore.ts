import { atom } from 'jotai'
import type { Assistant } from '../types/assistant'

export const assistantsAtom = atom<Assistant[]>([])

export const persistAssistantsAtom = atom(
  (get) => get(assistantsAtom),
  (get, set, next: Assistant[]) => {
    set(assistantsAtom, next)
    localStorage.setItem('assistants', JSON.stringify(next))
  }
)
