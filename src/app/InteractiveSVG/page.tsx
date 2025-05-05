'use client';

import React from 'react';

const InteractiveSVGMap = () => {
  return (
    <div className="w-full h-auto overflow-auto p-4 bg-white">
      <svg
        viewBox="0 0 1000 700"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* LOBBY */}
        <a href="/lobby">
          <rect x="460" y="340" width="80" height="60" fill="#000000" opacity="0.9">
            <title>Lobby (You Are Here)</title>
          </rect>
        </a>

        {/* Dormitory A */}
        <a href="/dorm-A">
          <rect x="700" y="120" width="90" height="60" fill="#ff0f00">
            <title>Dormitory A</title>
          </rect>
        </a>

        {/* Dormitory B */}
        <a href="/dorm-B">
          <rect x="700" y="200" width="90" height="60" fill="#cb6ce6">
            <title>Dormitory B</title>
          </rect>
        </a>

        {/* Cafetaria */}
        <a href="/cafetaria">
          <rect x="150" y="400" width="120" height="60" fill="#c1ff72">
            <title>Cafetaria</title>
          </rect>
        </a>

        {/* Training Building */}
        <a href="/trainingbuilding">
          <rect x="250" y="100" width="140" height="60" fill="#5ce1e6">
            <title>Training Building</title>
          </rect>
        </a>

        {/* Auditorium */}
        <a href="/auditorium">
          <rect x="600" y="320" width="80" height="60" fill="#737373">
            <title>Auditorium</title>
          </rect>
        </a>

        {/* Ballroom */}
        <a href="/ballroom">
          <rect x="600" y="400" width="80" height="60" fill="#ff66c4">
            <title>Ballroom</title>
          </rect>
        </a>

        {/* Mosque */}
        <a href="/mosque">
          <rect x="360" y="500" width="90" height="60" fill="#ffde59">
            <title>Mosque</title>
          </rect>
        </a>

        {/* Parking */}
        <a href="/parking">
          <rect x="200" y="550" width="100" height="60" fill="#ff7a00">
            <title>Parking</title>
          </rect>
        </a>

        {/* Sport Center */}
        <a href="/sportcenter">
          <rect x="100" y="150" width="110" height="60" fill="#0ed837">
            <title>Sport Center</title>
          </rect>
        </a>

        {/* Utility */}
        <a href="/utility">
          <rect x="800" y="500" width="90" height="60" fill="#5e17eb">
            <title>Utility</title>
          </rect>
        </a>

        {/* Labels (optional inline text) */}
        <text x="475" y="375" fontSize="12" fill="white" textAnchor="middle">Lobby</text>
        <text x="745" y="155" fontSize="12" fill="white" textAnchor="middle">Dorm A</text>
        <text x="745" y="235" fontSize="12" fill="white" textAnchor="middle">Dorm B</text>
        <text x="210" y="435" fontSize="12" fill="black" textAnchor="middle">Cafetaria</text>
        <text x="320" y="135" fontSize="12" fill="black" textAnchor="middle">Training</text>
        <text x="640" y="355" fontSize="12" fill="white" textAnchor="middle">Auditorium</text>
        <text x="640" y="435" fontSize="12" fill="white" textAnchor="middle">Ballroom</text>
        <text x="405" y="535" fontSize="12" fill="black" textAnchor="middle">Mosque</text>
        <text x="250" y="585" fontSize="12" fill="black" textAnchor="middle">Parking</text>
        <text x="155" y="185" fontSize="12" fill="white" textAnchor="middle">Sport</text>
        <text x="845" y="535" fontSize="12" fill="white" textAnchor="middle">Utility</text>
      </svg>
    </div>
  );
};

export default InteractiveSVGMap;
