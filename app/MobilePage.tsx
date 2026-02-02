'use client'

import { useState } from 'react'
import MobileHeader from '@/components/mobile/MobileHeader'
import MobileReels from '@/components/mobile/MobileReels'
import MobileAbout from '@/components/mobile/MobileAbout'
import MobileContact from '@/components/mobile/MobileContact'


export default function MobilePage() {
  const [screen, setScreen] = useState<'reels' | 'about' | 'contact'>('reels')

  return (
    <div className="mobile-app">
      <MobileHeader />

      <main className="mobile-screen">
        {screen === 'reels' && <MobileReels />}
        {screen === 'about' && <MobileAbout />}
        {screen === 'contact' && <MobileContact />}
      </main>

      
    </div>
  )
}
