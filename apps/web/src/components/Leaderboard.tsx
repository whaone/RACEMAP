interface Athlete {
  rank: number
  bib: string
  name: string
  team: string
  gap: string
  active?: boolean
}

const athletes: Athlete[] = [
  { rank: 1, bib: '#42', name: 'Jonas Vingegaard', team: 'Visma | Lease a Bike', gap: '0:00', active: true },
  { rank: 2, bib: '#1', name: 'Tadej Pogačar', team: 'UAE Team Emirates', gap: '+1:14' },
  { rank: 3, bib: '#12', name: 'Remco Evenepoel', team: 'Soudal Quick-Step', gap: '+2:36' },
  { rank: 4, bib: '#7', name: 'Primož Roglič', team: 'BORA - hansgrohe', gap: '+3:52' },
  { rank: 5, bib: '#23', name: 'Egan Bernal', team: 'INEOS Grenadiers', gap: '+5:17' },
  { rank: 6, bib: '#31', name: 'Geraint Thomas', team: 'INEOS Grenadiers', gap: '+6:44' },
  { rank: 7, bib: '#8', name: 'Adam Yates', team: 'UAE Team Emirates', gap: '+7:11' },
  { rank: 8, bib: '#15', name: 'David Gaudu', team: 'Groupama - FDJ', gap: '+8:30' },
]

export function Leaderboard() {
  return (
    <aside className="w-[360px] h-full bg-surface-container-lowest/90 backdrop-blur-2xl border-r border-outline-variant/30 shadow-[inset_-1px_0_0_0_rgba(255,255,255,0.05)] flex flex-col z-40">
      {/* Search + Filters */}
      <div className="p-4 border-b border-outline-variant/20">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-lg">
            search
          </span>
          <input
            className="w-full bg-surface-container-low border border-outline-variant/30 rounded-lg py-2 pl-10 pr-4 text-on-surface focus:border-secondary focus:ring-1 focus:ring-secondary transition-all font-body text-sm outline-none"
            placeholder="Search athletes or bibs..."
            type="text"
          />
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-primary-container text-on-primary-container font-label text-[12px] tracking-[0.1em] font-semibold py-2 rounded-lg border border-primary-fixed/20 shadow-[0_0_12px_rgba(202,243,0,0.1)] uppercase">
            ALL
          </button>
          <button className="flex-1 bg-surface-container text-on-surface-variant hover:bg-surface-variant font-label text-[12px] tracking-[0.1em] font-semibold py-2 rounded-lg border border-outline-variant/20 transition-colors uppercase">
            MEN
          </button>
          <button className="flex-1 bg-surface-container text-on-surface-variant hover:bg-surface-variant font-label text-[12px] tracking-[0.1em] font-semibold py-2 rounded-lg border border-outline-variant/20 transition-colors uppercase">
            WOMEN
          </button>
        </div>
      </div>

      {/* Athlete List */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 space-y-1 custom-scrollbar">
        {athletes.map((athlete) => (
          <AthleteRow key={athlete.rank} athlete={athlete} />
        ))}
      </div>
    </aside>
  )
}

function AthleteRow({ athlete }: { athlete: Athlete }) {
  if (athlete.active) {
    return (
      <div className="flex items-center gap-3 p-3 rounded-lg bg-surface-variant/40 border border-primary-fixed/30 shadow-[inset_0_0_12px_rgba(202,243,0,0.05)] relative overflow-hidden group cursor-pointer">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed" />
        <div className="font-data-timer text-lg text-primary-fixed w-6 text-center">{athlete.rank}</div>
        <div className="font-data-timer text-xs text-on-surface-variant w-8">{athlete.bib}</div>
        <div className="flex-1 min-w-0">
          <div className="font-headline text-sm font-semibold text-on-surface truncate">{athlete.name}</div>
          <div className="font-label text-[10px] tracking-widest text-on-surface-variant mt-0.5 uppercase">
            {athlete.team}
          </div>
        </div>
        <div className="font-data-timer text-sm text-primary-fixed text-right">{athlete.gap}</div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-surface-variant/20 border border-transparent hover:border-outline-variant/30 transition-all cursor-pointer">
      <div className="font-data-timer text-lg text-on-surface w-6 text-center">{athlete.rank}</div>
      <div className="font-data-timer text-xs text-on-surface-variant w-8">{athlete.bib}</div>
      <div className="flex-1 min-w-0">
        <div className="font-headline text-sm font-semibold text-on-surface truncate">{athlete.name}</div>
        <div className="font-label text-[10px] tracking-widest text-on-surface-variant mt-0.5 uppercase">
          {athlete.team}
        </div>
      </div>
      <div className="font-data-timer text-sm text-on-surface-variant text-right">{athlete.gap}</div>
    </div>
  )
}
