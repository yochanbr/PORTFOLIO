'use client'

interface MobileNavProps {
  active: 'reels' | 'about' | 'contact'
  onChange: (screen: 'reels' | 'about' | 'contact') => void
}

export default function MobileNav({ active, onChange }: MobileNavProps) {
  return (
    <nav className="mobile-nav">
      <button
        className={active === 'reels' ? 'active' : ''}
        onClick={() => onChange('reels')}
      >
        🎬
      </button>
      <button
        className={active === 'about' ? 'active' : ''}
        onClick={() => onChange('about')}
      >
        👤
      </button>
      <button
        className={active === 'contact' ? 'active' : ''}
        onClick={() => onChange('contact')}
      >
        ✉️
      </button>
    </nav>
  )
}
