import { useAtom } from 'jotai'
import { assistantsAtom } from './store/assistantStore'

function App() {
  const [assistants] = useAtom(assistantsAtom)

  return (
    <div style={{ padding: '2rem' }}>
      <h1>LLM Assistant</h1>

      <ul>
        {assistants.map((assistant) => (
          <li key={assistant.id}>
            {assistant.name} — {assistant.model}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

