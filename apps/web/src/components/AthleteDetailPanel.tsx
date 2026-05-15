export function AthleteDetailPanel() {
  return (
    <aside className="w-[400px] h-full bg-surface-container-lowest/90 backdrop-blur-2xl border-l border-outline-variant/30 flex flex-col z-40 overflow-y-auto custom-scrollbar">
      {/* Profile Header */}
      <ProfileHeader />

      {/* Live Telemetry */}
      <LiveTelemetry />

      {/* Checkpoint Timeline */}
      <CheckpointTimeline />
    </aside>
  )
}

function ProfileHeader() {
  return (
    <div className="p-6 border-b border-outline-variant/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4">
        <button className="text-on-surface-variant hover:text-on-surface transition-colors">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <div className="w-16 h-16 rounded-xl bg-surface-variant border border-outline-variant/50 overflow-hidden flex-shrink-0">
          <img
            alt="Athlete Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsbGlmih9CWdR3cDZ23Jp557FUYi0qHndRzSHSygYNV1BLaiSM-6z-A1h-9UxOTBrUURpDLQtsrA-b2qbxAmCFx3HtFCE1j0HMtgjDysvqj3ohWShXlKnExk0smfarhtASlg5ssgsSvq3OWRSNYQTuyPY_FeuCGqyAFB1_hRSHyl334wrCzMzwB3ICjYBU8ct58o67fTN9G7m7J_UbYTFkbTUdqEUN81zIs1CvGz-zy7qhSHqcTFN33bfSZFqDCPGntGfeBdre"
          />
        </div>
        <div>
          <div className="font-data-timer text-sm text-primary-fixed mb-1">Rank 1 • Bib #42</div>
          <h2 className="font-headline text-2xl font-bold text-on-surface tracking-tight">Jonas Vingegaard</h2>
          <div className="font-label text-xs tracking-widest text-on-surface-variant mt-1 uppercase">
            Visma | Lease a Bike
          </div>
        </div>
      </div>
    </div>
  )
}

function LiveTelemetry() {
  return (
    <div className="p-6 border-b border-outline-variant/20">
      <h3 className="font-label text-[12px] tracking-[0.1em] font-semibold text-on-surface-variant mb-4 flex items-center gap-2 uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-fixed" />
        Live Telemetry
      </h3>

      <div className="grid grid-cols-2 gap-4">
        {/* Speed */}
        <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="font-label text-[10px] tracking-widest text-on-surface-variant mb-2 uppercase">
            Current Speed
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-data-timer text-3xl text-on-surface">42.5</span>
            <span className="font-data-timer text-sm text-on-surface-variant">km/h</span>
          </div>
        </div>

        {/* Heart Rate */}
        <div className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="font-label text-[10px] tracking-widest text-on-surface-variant mb-2 uppercase">
            Heart Rate
          </div>
          <div className="flex items-baseline gap-1">
            <span className="font-data-timer text-3xl text-on-surface">168</span>
            <span className="font-data-timer text-sm text-error">bpm</span>
          </div>
        </div>
      </div>

      {/* Distance Progress */}
      <div className="mt-4 bg-surface-container-low p-4 rounded-xl border border-outline-variant/20">
        <div className="flex justify-between items-end mb-2">
          <div className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
            Distance Covered
          </div>
          <div className="font-data-timer text-sm text-on-surface">124 / 180 km</div>
        </div>
        <div className="h-1.5 bg-surface-variant rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-secondary to-primary-fixed w-[68%] transition-all duration-500" />
        </div>
      </div>
    </div>
  )
}

interface Checkpoint {
  id: string
  name: string
  distance: string
  time?: string
  eta?: string
  status: 'passed' | 'current' | 'upcoming'
}

const checkpoints: Checkpoint[] = [
  { id: 'cp1', name: 'CP1 - Valley Entrance', distance: '45 km', time: '10:14:22', status: 'passed' },
  { id: 'cp2', name: 'CP2 - High Pass', distance: '98 km', time: '11:45:03', status: 'passed' },
  { id: 'current', name: 'Current Position', distance: '124 km', status: 'current' },
  { id: 'cp3', name: 'CP3 - Desert Ridge', distance: '150 km', eta: 'ETA: 13:10', status: 'upcoming' },
]

function CheckpointTimeline() {
  return (
    <div className="p-6">
      <h3 className="font-label text-[12px] tracking-[0.1em] font-semibold text-on-surface-variant mb-6 uppercase">
        Checkpoint Timeline
      </h3>

      <div className="relative pl-6 space-y-6">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-2 bottom-2 w-[2px] bg-surface-variant" />

        {checkpoints.map((cp) => {
          if (cp.status === 'passed') {
            return (
              <div key={cp.id} className="relative">
                <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-surface-container-low border-2 border-outline-variant flex items-center justify-center z-10">
                  <div className="w-1.5 h-1.5 rounded-full bg-on-surface-variant" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-headline text-sm font-semibold text-on-surface-variant">{cp.name}</div>
                    <div className="font-label text-[10px] tracking-widest text-on-surface-variant/60 mt-1">
                      {cp.distance}
                    </div>
                  </div>
                  <div className="font-data-timer text-sm text-on-surface-variant">{cp.time}</div>
                </div>
              </div>
            )
          }

          if (cp.status === 'current') {
            return (
              <div key={cp.id} className="relative">
                <div className="absolute -left-[27px] top-1 w-4 h-4 rounded-full bg-primary-container/20 border border-primary-fixed flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-primary-fixed shadow-[0_0_8px_#caf300]" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-headline text-sm font-semibold text-primary-fixed">{cp.name}</div>
                    <div className="font-label text-[10px] tracking-widest text-primary-fixed/80 mt-1">
                      {cp.distance}
                    </div>
                  </div>
                  <div className="font-data-timer text-sm text-primary-fixed animate-pulse">LIVE</div>
                </div>
              </div>
            )
          }

          return (
            <div key={cp.id} className="relative">
              <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-surface-container-low border-2 border-surface-variant z-10" />
              <div className="flex justify-between items-start opacity-50">
                <div>
                  <div className="font-headline text-sm font-semibold text-on-surface">{cp.name}</div>
                  <div className="font-label text-[10px] tracking-widest text-on-surface-variant mt-1">
                    {cp.distance}
                  </div>
                </div>
                <div className="font-data-timer text-sm text-on-surface-variant">{cp.eta}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
