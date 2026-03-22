import React from "react"

import { cn } from "@/lib/utils"

export interface CpuArchitectureSvgProps {
  className?: string
  width?: string
  height?: string
  text?: string
  showCpuConnections?: boolean
  lineMarkerSize?: number
  animateText?: boolean
  animateLines?: boolean
  animateMarkers?: boolean
  isDark?: boolean
  cpuCardDark?: boolean
}

export default function CpuArchitecture({
  className,
  width = "100%",
  height = "100%",
  text = "TECFA",
  showCpuConnections = true,
  animateText = true,
  lineMarkerSize = 18,
  animateLines = true,
  animateMarkers = true,
  isDark = true,
  cpuCardDark = false,
}: CpuArchitectureSvgProps) {
  const lineColor = isDark ? "#ffffff" : "#1a1a1a"
  const connectionColor = isDark ? "#505050" : "#a0a0a0"
  const connectionEndColor = isDark ? "#1a1a1a" : "#e0e0e0"
  const cardBg = isDark ? "#ffffff" : "#1a1a1a"
  const markerStroke = isDark ? "#404040" : "#d0d0d0"
  const textColor = isDark ? "#181818" : "#f5f5f5"
  const glowColor = isDark ? "white" : "black"

  return (
    <svg
      className={cn("text-white transition-all duration-500", className)}
      width={width}
      height={height}
      viewBox="0 0 200 100"
    >
      <defs>
        <mask id="cpu-mask-1">
          <path d="M 10 20 h 79.5 q 5 0 5 5 v 24" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-2">
          <path d="M 180 10 h -69.7 q -5 0 -5 5 v 24" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-3">
          <path d="M 130 20 v 21.8 q 0 5 -5 5 h -10" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-4">
          <path d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-5">
          <path d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-6">
          <path d="M 94.8 95 v -36" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-7">
          <path d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14" strokeWidth="0.5" stroke="white" />
        </mask>
        <mask id="cpu-mask-8">
          <path d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20" strokeWidth="0.5" stroke="white" />
        </mask>

        <radialGradient id="cpu-white-grad" fx="1">
          <stop offset="0%" stopColor="#ffffff" className={animateText ? "gpu2-grad-animate" : ""} />
          <stop offset="40%" stopColor="#e0e0e0" className={animateText ? "gpu2-grad-animate" : ""} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <radialGradient id="cpu-gray-grad" fx="1">
          <stop offset="0%" stopColor="#ffffff" className={animateText ? "gpu2-grad-animate-slow" : ""} />
          <stop offset="30%" stopColor="#a0a0a0" className={animateText ? "gpu2-grad-animate-slow" : ""} />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>

        <filter id="cpu-glow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="card-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feFlood floodColor={glowColor} floodOpacity="0.4" result="color"/>
          <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <marker id="cpu-circle-marker" viewBox="0 0 10 10" refX="5" refY="5" markerWidth={lineMarkerSize} markerHeight={lineMarkerSize}>
          <circle 
            cx="5" 
            cy="5" 
            r="2.5" 
            fill={lineColor} 
            stroke={markerStroke} 
            strokeWidth="0.5"
            className={animateMarkers ? "gpu2-marker-pulse" : ""}
          />
        </marker>

        <linearGradient id="cpu-connection-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={connectionColor} className="gpu2-conn-grad" />
          <stop offset="100%" stopColor={connectionEndColor} />
        </linearGradient>

        <linearGradient id="cpu-text-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#303030" className={animateText ? "gpu2-grad-animate-slow" : ""} />
          <stop offset="25%" stopColor="#ffffff" className={animateText ? "gpu2-grad-animate-slow" : ""} />
          <stop offset="50%" stopColor="#303030" className={animateText ? "gpu2-grad-animate-slow" : ""} />
        </linearGradient>
      </defs>

      {/* Circuit paths - CSS animated */}
      <g 
        stroke={lineColor} 
        fill="none" 
        strokeWidth="0.5" 
        strokeDasharray="100 100" 
        pathLength="100" 
        markerStart="url(#cpu-circle-marker)"
        filter="url(#line-glow)"
      >
        <path 
          strokeDasharray="100 100" 
          pathLength="100" 
          d="M 10 20 h 79.5 q 5 0 5 5 v 30"
          className={animateLines ? "gpu2-stroke-animate" : ""}
        />
        <path 
          strokeDasharray="100 100" 
          pathLength="100" 
          d="M 180 10 h -69.7 q -5 0 -5 5 v 30"
          className={animateLines ? "gpu2-stroke-animate gpu2-stroke-animate-d1" : ""}
        />
        <path 
          d="M 130 20 v 21.8 q 0 5 -5 5 h -10"
          className={animateLines ? "gpu2-stroke-animate gpu2-stroke-animate-d2" : ""}
        />
        <path 
          d="M 170 80 v -21.8 q 0 -5 -5 -5 h -50"
          className={animateLines ? "gpu2-stroke-animate gpu2-stroke-animate-d3" : ""}
        />
        <path 
          strokeDasharray="100 100" 
          pathLength="100" 
          d="M 135 65 h 15 q 5 0 5 5 v 10 q 0 5 -5 5 h -39.8 q -5 0 -5 -5 v -20"
          className={animateLines ? "gpu2-stroke-animate gpu2-stroke-animate-d4" : ""}
        />
        <path 
          d="M 94.8 95 v -36"
          className={animateLines ? "gpu2-stroke-animate gpu2-stroke-animate-d5" : ""}
        />
        <path 
          d="M 88 88 v -15 q 0 -5 -5 -5 h -10 q -5 0 -5 -5 v -5 q 0 -5 5 -5 h 14"
          className={animateLines ? "gpu2-stroke-animate gpu2-stroke-animate-d6" : ""}
        />
        <path 
          d="M 30 30 h 25 q 5 0 5 5 v 6.5 q 0 5 5 5 h 20"
          className={animateLines ? "gpu2-stroke-animate gpu2-stroke-animate-d7" : ""}
        />
      </g>

      {/* Particle circles with CSS animation */}
      <g mask="url(#cpu-mask-1)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-white-grad)" />
      </g>
      <g mask="url(#cpu-mask-2)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-gray-grad)" />
      </g>
      <g mask="url(#cpu-mask-3)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-white-grad)" />
      </g>
      <g mask="url(#cpu-mask-4)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-gray-grad)" />
      </g>
      <g mask="url(#cpu-mask-5)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-white-grad)" />
      </g>
      <g mask="url(#cpu-mask-6)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-gray-grad)" />
      </g>
      <g mask="url(#cpu-mask-7)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-white-grad)" />
      </g>
      <g mask="url(#cpu-mask-8)" filter="url(#cpu-glow)">
        <circle cx="0" cy="0" r="8" fill="url(#cpu-gray-grad)" />
      </g>

      <g>
        {showCpuConnections && (
          <g fill="url(#cpu-connection-gradient)">
            <rect x="93" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="104" y="37" width="2.5" height="5" rx="0.7" />
            <rect x="116.3" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
            <rect x="122.8" y="44" width="2.5" height="5" rx="0.7" transform="rotate(90 116.25 45.5)" />
            <rect x="104" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
            <rect x="114.5" y="16" width="2.5" height="5" rx="0.7" transform="rotate(180 105.25 39.5)" />
            <rect x="80" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
            <rect x="87" y="-13.6" width="2.5" height="5" rx="0.7" transform="rotate(270 115.25 19.5)" />
          </g>
        )}
        
        <g filter="url(#card-glow)">
          <rect 
            x="85" 
            y="40" 
            width="30" 
            height="20" 
            rx="3" 
            fill={cardBg}
            className="gpu2-card-pulse gpu2-card-radius"
          />
        </g>
        
        <rect 
          x="85" 
          y="40" 
          width="30" 
          height="20" 
          rx="3" 
          fill="none" 
          stroke={lineColor}
          strokeWidth="0.5"
          opacity="0.8"
          className="gpu2-card-pulse"
        />
        
        <text 
          x="100" 
          y="52.5" 
          fontSize="6" 
          fill={animateText ? "url(#cpu-text-gradient)" : textColor} 
          fontWeight="700" 
          letterSpacing="0.05em"
          fontFamily="var(--font-mono), ui-monospace, monospace"
          textAnchor="middle"
        >
          {text}
        </text>
      </g>
    </svg>
  )
}
