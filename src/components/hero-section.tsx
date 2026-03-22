"use client"

import { useState } from "react"
import CpuArchitecture from "@/components/ui/cpu-architecture"
import { MagneticText } from "@/components/ui/morphing-cursor"
import { Component } from "@/components/ui/circular-command-menu"
import { ThemeToggleButton } from "@/components/ui/theme-toggle-buttons"
import { Instagram, Github, Linkedin, Mail, FileArchive } from "lucide-react"
import HoverSlatButton from "@/components/ui/hover-button"
import { cn } from "@/lib/utils"

export default function HeroSection() {
  const [isDark, setIsDark] = useState(true)

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/tecfa-specs.zip"
    link.download = "tecfa-specs.zip"
    link.click()
  }

  const socialItems = [
    { id: "instagram", icon: <Instagram className="h-4 w-4" />, label: "Instagram", onClick: () => window.open("https://instagram.com", "_blank") },
    { id: "github", icon: <Github className="h-4 w-4" />, label: "GitHub", onClick: () => window.open("https://github.com", "_blank") },
    { id: "linkedin", icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", onClick: () => window.open("https://linkedin.com", "_blank") },
    { id: "gmail", icon: <Mail className="h-4 w-4" />, label: "Gmail", onClick: () => window.open("mailto:contact@tecfa.tech", "_blank") },
    { id: "zip", icon: <FileArchive className="h-4 w-4" />, label: "Download Specs", onClick: handleDownload },
  ]

  return (
    <div 
      className={cn(
        "min-h-screen h-screen transition-colors duration-700 overflow-hidden",
        isDark ? "bg-neutral-950" : "bg-neutral-50"
      )}
    >
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-12 transition-all duration-500",
        isDark ? "bg-transparent" : "bg-transparent"
      )}>
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-2.5 h-2.5 rounded-full transition-all duration-500",
            isDark ? "bg-white shadow-[0_0_10px_rgba(255,255,255,0.6)]" : "bg-neutral-900 shadow-[0_0_10px_rgba(0,0,0,0.3)]"
          )} />
          <span className={cn(
            "text-sm font-medium tracking-[0.4em] uppercase transition-colors duration-500",
            isDark ? "text-white" : "text-neutral-900"
          )}>
            TECFA
          </span>
        </div>

        <div className="flex items-center gap-12">
          {["À propos", "Portfolio", "Contact"].map((item) => (
            <span 
              key={item}
              className={cn(
                "text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 cursor-pointer opacity-60 hover:opacity-100",
                isDark ? "text-white" : "text-neutral-900"
              )}
            >
              {item}
            </span>
          ))}
        </div>

        <ThemeToggleButton
          isDark={isDark}
          onToggle={() => setIsDark(!isDark)}
          className="w-12 h-12"
        />
      </nav>

      <section className={cn(
        "relative h-screen flex items-center pt-16 transition-colors duration-700",
        isDark ? "bg-neutral-950" : "bg-neutral-50"
      )}>
        <div className={cn(
          "absolute inset-0 transition-colors duration-700",
          isDark 
            ? "bg-gradient-to-br from-neutral-900 via-neutral-950 to-black" 
            : "bg-gradient-to-br from-neutral-100 via-neutral-50 to-white"
        )} />

        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] transition-all duration-700"
          style={{
            background: isDark 
              ? "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 50%)" 
              : "radial-gradient(circle, rgba(0,0,0,0.05) 0%, transparent 50%)"
          }}
        />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-end w-full h-full max-w-7xl mx-auto px-12">
          <div className="flex-1 flex items-center justify-center h-full order-2 lg:order-1">
            <CpuArchitecture 
              className="w-full h-auto max-w-md lg:max-w-lg" 
              text="TECFA"
              showCpuConnections={true}
              animateText={true}
              animateLines={true}
              animateMarkers={true}
              isDark={isDark}
            />
          </div>

          <div className="flex-1 flex flex-col justify-center items-start text-left h-full py-16 pl-8 lg:pl-16 order-1 lg:order-2">
            <div className={cn(
              "mb-10 px-12 py-5 rounded-2xl backdrop-blur-sm border transition-all duration-500",
              isDark 
                ? "bg-white/[0.03] border-white/[0.08]" 
                : "bg-black/[0.02] border-black/[0.06]"
            )}>
              <p className={cn(
                "text-[10px] font-medium tracking-[0.6em] uppercase transition-colors duration-500",
                isDark ? "text-neutral-500" : "text-neutral-500"
              )}>
                System Architecture
              </p>
            </div>

            <div className="mb-10">
              <MagneticText 
                text="Pure" 
                hoverText="MAX" 
                isDark={isDark}
                className={cn(
                  "inline-block",
                  isDark ? "text-white" : "text-neutral-900"
                )} 
              />
              <br />
              <MagneticText 
                text="Performance" 
                hoverText="POWER" 
                isDark={isDark}
                className={cn(
                  "inline-block",
                  isDark ? "text-white" : "text-neutral-900"
                )} 
              />
            </div>

            <p className={cn(
              "text-sm font-light max-w-sm leading-relaxed tracking-wide mb-12 transition-colors duration-500",
              isDark ? "text-neutral-500" : "text-neutral-600"
            )}>
              Next-generation processing power engineered for the most demanding computational challenges.
            </p>

            <div className="flex items-center gap-4 mb-12">
              <HoverSlatButton 
                initialText="START" 
                hoverText="CLICK" 
                size="sm"
                variant={isDark ? "dark" : "light"}
              />

              <HoverSlatButton 
                initialText="SPECS" 
                hoverText="FILES" 
                size="sm"
                variant={isDark ? "light" : "dark"}
              />
            </div>

            <p className={cn(
              "text-[8px] tracking-[0.4em] transition-colors duration-500",
              isDark ? "text-neutral-700" : "text-neutral-400"
            )}>
              FREE SHIPPING • 30-DAY RETURNS • 2 YEAR WARRANTY
            </p>

            <div className={cn(
              "flex gap-14 mt-12 pt-8 border-t transition-colors duration-500",
              isDark ? "border-white/[0.06]" : "border-black/[0.06]"
            )}>
              {[
                { value: "12K+", label: "Active Users" },
                { value: "99.9%", label: "Uptime" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={i} className="text-left">
                  <p className={cn(
                    "text-2xl font-light transition-colors duration-500",
                    isDark ? "text-white" : "text-neutral-900"
                  )}>{stat.value}</p>
                  <p className={cn(
                    "text-[8px] tracking-[0.15em] uppercase mt-1 transition-colors duration-500",
                    isDark ? "text-neutral-600" : "text-neutral-500"
                  )}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-20 right-16 z-50">
          <Component items={socialItems} />
        </div>
      </section>
    </div>
  )
}
