import { TopAppBar } from './components/TopAppBar'
import { Leaderboard } from './components/Leaderboard'
import { MapView } from './components/MapView'
import { AthleteDetailPanel } from './components/AthleteDetailPanel'

function App() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body overflow-hidden">
      <TopAppBar />
      <main className="flex-1 flex pt-20 h-screen w-full relative">
        <Leaderboard />
        <MapView />
        <AthleteDetailPanel />
      </main>
    </div>
  )
}

export default App
