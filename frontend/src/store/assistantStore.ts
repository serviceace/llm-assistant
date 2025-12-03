import { atom } from 'jotai'
import type { Assistant } from '../types/assistant'

const defaultAssistant: Assistant = {
  id: 'default',
  name: 'Asistente base',
  systemPrompt: 'Eres un asistente útil y claro.',
  model: 'gpt-4o-mini',
  temperature: 0.7,
}

export const assistantsAtom = atom<Assistant[]>([defaultAssistant])

export const persistAssistantsAtom = atom(
  (get) => get(assistantsAtom),
  (get, set, next: Assistant[]) => {
    set(assistantsAtom, next)
    localStorage.setItem('assistants', JSON.stringify(next))
  }
)
