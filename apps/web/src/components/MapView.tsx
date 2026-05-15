export function MapView() {
  return (
    <div className="flex-1 relative bg-surface-dim z-10 overflow-hidden">
      {/* Map background */}
      <img
        alt="Tactical map view showing rugged terrain and topographical lines"
        className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGBqCFvKB2zGS3LhwKQSMRMxVrHU8cH_ORqwMmzud59C93qqH1BR0-asfag5RV7rzgKxqLdsEeJ-cSM7hws-jpEUmggbcXxMEjygtxfT6356Eauh_T2ntTwk0RNKL3xC9BRrBIZW-0XuqNuz54TxeZEoFe2G6VFNDRAu4LxFNXXWfAkyKqsIK48EhrYvnPemyI-ft-bXP6rg4oproSTXukWve-NTJMNIeDT7gRTwO7_73gAPPDmNZOaKMfPLKy7rNDiMNMI9Wh"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

      {/* Route polyline */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1000"
      >
        <path
          className="opacity-70"
          d="M100,800 Q300,700 400,500 T700,300 T900,100"
          fill="none"
          stroke="#4b8eff"
          strokeDasharray="10,10"
          strokeWidth="4"
        />
      </svg>

      {/* Marker: Rank 1 (Leader) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20">
        <div className="w-8 h-8 bg-primary-fixed rounded-full flex items-center justify-center border-2 border-background shadow-[0_0_20px_rgba(202,243,0,0.5)]">
          <span className="font-data-timer text-xs font-bold text-on-primary-fixed">1</span>
        </div>
        {/* Tooltip */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-surface-container-high/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-outline-variant/30 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-30 pointer-events-none">
          <span className="font-headline text-sm font-semibold text-on-surface">Jonas Vingegaard</span>
        </div>
      </div>

      {/* Marker: Rank 2 */}
      <div className="absolute top-[60%] left-[40%] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-6 h-6 bg-surface-variant rounded-full flex items-center justify-center border-2 border-background shadow-lg">
          <span className="font-data-timer text-[10px] font-bold text-on-surface">2</span>
        </div>
      </div>

      {/* Marker: Alert */}
      <div className="absolute top-[70%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="w-6 h-6 bg-error rounded-full flex items-center justify-center border-2 border-background shadow-[0_0_15px_rgba(255,180,171,0.4)]">
          <span className="font-data-timer text-[10px] font-bold text-on-error">!</span>
        </div>
      </div>

      {/* Elevation Profile */}
      <ElevationProfile />
    </div>
  )
}

function ElevationProfile() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-surface-container-lowest/80 backdrop-blur-sm border-t border-outline-variant/30 z-30 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-label text-[12px] tracking-[0.1em] font-semibold text-on-surface-variant uppercase">
          Elevation Profile
        </h3>
        <div className="flex gap-4">
          <span className="font-label text-[10px] tracking-widest text-on-surface-variant uppercase">
            MAX ALT: 1450m
          </span>
          <span className="font-label text-[10px] tracking-widest text-primary-fixed uppercase">
            CURRENT: 850m
          </span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-24 w-full mt-4">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] font-label text-on-surface-variant/60 pointer-events-none">
          <span>1500m</span>
          <span>1000m</span>
          <span>500m</span>
          <span>0m</span>
        </div>

        {/* SVG Chart */}
        <svg
          className="w-full h-full pl-8 pr-2"
          preserveAspectRatio="none"
          viewBox="0 0 180 100"
        >
          <defs>
            <linearGradient id="elevationGradient" x1="0%" x2="0%" y1="0%" y2="100%">
              <stop offset="0%" stopColor="#25e500" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#25e500" stopOpacity="0" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur result="coloredBlur" stdDeviation="2" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M0,100 L0,80 Q20,60 45,90 T90,40 T135,70 T180,20 L180,100 Z"
            fill="url(#elevationGradient)"
            stroke="#25e500"
            strokeWidth="1"
          />
          <line
            stroke="#25e500"
            strokeDasharray="2,1"
            strokeWidth="0.5"
            x1="124"
            x2="124"
            y1="0"
            y2="100"
          />
          {/* Secondary markers */}
          <circle cx="45" cy="90" fill="#787960" r="2" stroke="#0c1609" strokeWidth="0.5" opacity="0.7" />
          <circle cx="90" cy="40" fill="#787960" r="2" stroke="#0c1609" strokeWidth="0.5" opacity="0.7" />
          {/* Leader position */}
          <circle
            className="animate-pulse"
            cx="124"
            cy="65"
            fill="#25e500"
            filter="url(#glow)"
            r="3.5"
            stroke="#0c1609"
            strokeWidth="1"
          />
        </svg>

        {/* X-Axis Labels */}
        <div className="absolute left-8 right-2 bottom-[-16px] flex justify-between text-[8px] font-label text-on-surface-variant/60">
          <span>0km</span>
          <span>45km</span>
          <span>90km</span>
          <span>135km</span>
          <span>180km</span>
        </div>
      </div>
    </div>
  )
}
