import { useAtom } from 'jotai'
import { assistantsAtom } from './store/assistantStore'

function App() {
  const [assistants] = useAtom(assistantsAtom)

  return (
    <div>
      <h1>LLM Assistant</h1>
      <p>Asistentes creados: {assistants.length}</p>
    </div>
  )
}

export default App
