"use client";

import React from "react";

export default function AvatarSwirl() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] pointer-events-none z-[-1] opacity-60">
      <svg
        className="w-full h-full animate-[spin_35s_linear_infinite]"
        viewBox="-400 -400 800 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(-1105, -465)">
          {/* Outermost Loop */}
          <path
            d="M1020 200 C 1220 180, 1380 260, 1420 420 C 1460 580, 1320 740, 1140 760 C 960 780, 820 680, 800 520 C 780 360, 880 220, 1020 200 Z"
            stroke="var(--accent)"
            strokeOpacity="0.15"
            strokeWidth="1.2"
            strokeDasharray="8 6"
          />

          {/* Loop 2 */}
          <path
            d="M1040 240 C 1200 220, 1340 290, 1370 430 C 1400 560, 1280 700, 1130 710 C 980 720, 860 640, 840 510 C 820 380, 910 260, 1040 240 Z"
            stroke="var(--accent-cyan)"
            strokeOpacity="0.3"
            strokeWidth="1.4"
          />

          {/* Loop 3 - Index Contour */}
          <path
            d="M1060 280 C 1180 260, 1300 320, 1320 440 C 1340 540, 1240 650, 1120 660 C 1000 670, 900 600, 880 490 C 860 390, 940 300, 1060 280 Z"
            stroke="var(--accent)"
            strokeOpacity="0.45"
            strokeWidth="2"
            filter="drop-shadow(0px 0px 4px var(--accent))"
          />

          {/* Loop 4 */}
          <path
            d="M1080 320 C 1170 300, 1260 350, 1270 450 C 1280 520, 1200 610, 1100 620 C 1010 630, 930 570, 920 480 C 910 400, 980 340, 1080 320 Z"
            stroke="var(--accent-cyan)"
            strokeOpacity="0.25"
            strokeWidth="1.3"
          />

          {/* Loop 5 - Inner Ridge */}
          <path
            d="M1100 360 C 1160 350, 1220 380, 1230 460 C 1240 510, 1170 570, 1090 580 C 1020 590, 960 540, 950 470 C 940 410, 1010 370, 1100 360 Z"
            stroke="var(--accent-warm)"
            strokeOpacity="0.2"
            strokeWidth="1.2"
          />

          {/* Summit Peak */}
          <path
            d="M1110 400 C 1150 390, 1180 420, 1190 470 C 1200 500, 1150 530, 1100 540 C 1050 540, 1000 510, 990 460 C 980 430, 1040 400, 1110 400 Z"
            stroke="var(--accent)"
            strokeOpacity="0.3"
            strokeWidth="1.8"
          />

          {/* Spot Elevation Center Cross */}
          {/* We rotate the entire thing, so text might rotate, but it looks cool */}
          <circle cx="1105" cy="465" r="2.5" fill="var(--accent)" fillOpacity="0.5" />
          <text
            x="1115"
            y="469"
            fill="var(--accent)"
            fillOpacity="0.5"
            fontSize="12"
            fontFamily="var(--font-geist-mono, monospace)"
            fontWeight="bold"
            letterSpacing="0.05em"
          >
            +980m
          </text>
        </g>
      </svg>
    </div>
  );
}
