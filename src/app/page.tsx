"use client"

import HeroSection from "@/components/hero-section"
import { useState } from "react"
import { PageIntro } from "@/components/ui/page-intro"

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      <HeroSection />
      {showIntro && (
        <PageIntro
          text="Mohammad Shabana"
          isDarkMode={true}
          onComplete={() => setShowIntro(false)}
        />
      )}
    </>
  )
}
