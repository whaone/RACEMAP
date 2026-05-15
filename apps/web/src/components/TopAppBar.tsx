export function TopAppBar() {
  return (
    <header className="bg-surface-dim/80 backdrop-blur-xl border-b border-outline-variant/20 flex justify-between items-center w-full px-6 py-4 h-20 fixed top-0 left-0 right-0 z-50">
      {/* Left: Brand + Race Name */}
      <div className="flex items-center gap-xs">
        <span className="font-display text-[48px] leading-none font-extrabold tracking-tighter uppercase text-primary-fixed">
          Racemap
        </span>
        <div className="h-6 w-px bg-outline-variant/30 mx-4" />
        <span className="font-headline text-[32px] leading-tight font-bold tracking-tight text-on-surface">
          Gravel World Championship
        </span>
      </div>

      {/* Right: Status + Actions */}
      <div className="flex items-center gap-md">
        {/* Live Badge */}
        <div className="flex items-center gap-xs bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/30">
          <span className="w-2 h-2 rounded-full bg-primary-fixed animate-pulse shadow-[0_0_8px_#caf300]" />
          <span className="font-label text-[12px] tracking-[0.1em] font-semibold text-primary-fixed uppercase">
            LIVE
          </span>
        </div>

        {/* Last Updated */}
        <div className="font-label text-sm text-on-surface-variant">
          Last Updated: 2s ago
        </div>

        {/* Icon Buttons */}
        <div className="flex gap-sm">
          {(['sensors', 'history', 'settings'] as const).map((icon) => (
            <button
              key={icon}
              className="text-on-surface-variant hover:text-primary-fixed transition-colors duration-200"
            >
              <span className="material-symbols-outlined">{icon}</span>
            </button>
          ))}
        </div>

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant">
          <img
            alt="User Profile"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-gQVQVHRuLvoGGbl5xUem-S6QKNF-aGIuV-e4IX9ZMajCUN_XolRCYzv9oiYbPiDAgaWTJgWDSEDI8cmG0zpGDpXUBJn37sah3lN0Ww77-6gJ5EXXUcY2h0KNc2v6UCYCR-67KaktFABxop0DzIZdfn7brAR3RxjGTkru6Vra4GNmldpVjhwH5cMUH6H1WZXzJtZXpaETfi4vGRfJ3U17B54xaujH3ZfRNDa8dn5LO_oYcmSKQL2o71QASZBbQDwswnB8Dy34"
          />
        </div>
      </div>
    </header>
  )
}
