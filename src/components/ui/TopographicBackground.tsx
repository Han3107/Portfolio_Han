"use client";

import React from "react";

export default function TopographicBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-65 dark:opacity-50 transition-opacity duration-700"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="topo-grad-primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
            <stop offset="50%" stopColor="var(--accent-cyan)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--accent-warm)" stopOpacity="0.15" />
          </linearGradient>

          <linearGradient id="topo-grad-secondary" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--accent-cyan)" stopOpacity="0.4" />
            <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="var(--accent-soft)" stopOpacity="0.08" />
          </linearGradient>

          <linearGradient id="topo-grad-faint" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.12" />
            <stop offset="50%" stopColor="var(--accent-cyan)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.1" />
          </linearGradient>

          {/* Glow filter for accent lines */}
          <filter id="topo-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Topographic Survey Grid Crosshairs */}
        <g stroke="var(--accent)" strokeOpacity="0.25" strokeWidth="1">
          <path d="M120 110v20M110 120h20" />
          <path d="M480 110v20M470 120h20" />
          <path d="M840 110v20M830 120h20" />
          <path d="M1200 110v20M1190 120h20" />

          <path d="M240 390v20M230 400h20" />
          <path d="M600 390v20M590 400h20" />
          <path d="M960 390v20M950 400h20" />
          <path d="M1320 390v20M1310 400h20" />

          <path d="M120 670v20M110 680h20" />
          <path d="M480 670v20M470 680h20" />
          <path d="M840 670v20M830 680h20" />
          <path d="M1200 670v20M1190 680h20" />
        </g>



        {/* Primary Mountain Ridge (Left-Center Elevation Field) */}
        <g className="topo-waves-slow">
          {/* Contour 1 - Deep Ridge */}
          <path
            d="M-50 250 C 120 280, 240 190, 380 230 C 520 270, 610 380, 780 340 C 950 300, 1080 180, 1260 220 C 1380 250, 1460 210, 1520 200"
            stroke="url(#topo-grad-faint)"
            strokeWidth="1.2"
          />

          {/* Contour 2 */}
          <path
            d="M-50 290 C 130 320, 260 230, 400 270 C 540 310, 630 420, 800 380 C 970 340, 1100 220, 1280 260 C 1400 290, 1470 250, 1520 240"
            stroke="url(#topo-grad-primary)"
            strokeWidth="1.4"
          />

          {/* Contour 3 - Index Contour (Thicker, Highlighted) */}
          <path
            d="M-50 330 C 140 360, 280 270, 420 310 C 560 350, 650 460, 820 420 C 990 380, 1120 260, 1300 300 C 1420 330, 1480 290, 1520 280"
            stroke="url(#topo-grad-primary)"
            strokeWidth="2"
            filter="url(#topo-glow)"
          />

          {/* Contour 4 */}
          <path
            d="M-50 370 C 150 400, 300 310, 440 350 C 580 390, 670 500, 840 460 C 1010 420, 1140 300, 1320 340 C 1440 370, 1490 330, 1520 320"
            stroke="url(#topo-grad-secondary)"
            strokeWidth="1.2"
          />

          {/* Contour 5 */}
          <path
            d="M-50 410 C 160 440, 320 350, 460 390 C 600 430, 690 540, 860 500 C 1030 460, 1160 340, 1340 380 C 1460 410, 1500 370, 1520 360"
            stroke="url(#topo-grad-faint)"
            strokeWidth="1.2"
          />
        </g>

        {/* Lower Left Topographic Valley Waves - Smooth Edge-to-Edge Contours */}
        <g opacity="0.85">
          <path
            d="M-80 580 C 90 550, 210 670, 360 630 C 500 590, 580 730, 720 710 C 860 690, 930 810, 1080 820 C 1220 830, 1370 880, 1520 900"
            stroke="url(#topo-grad-faint)"
            strokeWidth="1.2"
          />
          <path
            d="M-80 620 C 100 590, 230 710, 380 670 C 520 630, 600 770, 740 750 C 880 730, 950 850, 1100 860 C 1240 870, 1380 910, 1520 930"
            stroke="url(#topo-grad-secondary)"
            strokeWidth="1.4"
          />
          <path
            d="M-80 660 C 110 630, 250 750, 400 710 C 540 670, 620 810, 760 790 C 900 770, 970 890, 1120 900 C 1260 910, 1390 940, 1520 960"
            stroke="url(#topo-grad-primary)"
            strokeWidth="1.6"
          />
          <path
            d="M-80 700 C 120 670, 270 790, 420 750 C 560 710, 640 850, 780 830 C 920 810, 990 930, 1140 940 C 1280 950, 1400 970, 1520 990"
            stroke="url(#topo-grad-faint)"
            strokeWidth="1.2"
            strokeDasharray="6 4"
          />
        </g>
      </svg>
    </div>
  );
}
