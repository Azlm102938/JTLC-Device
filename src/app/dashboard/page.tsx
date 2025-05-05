'use client';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen bg-white overflow-hidden">
  {/* Left - SVG Map */}
  <div className="w-full md:w-1/2 h-[60vh] md:h-full">
    <svg
      viewBox="0 0 1500 900"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
    >
      <image href="/LahanJTLC.png" x="0" y="0" width="100%" height="100%" />
      {/* Your rect regions remain unchanged */}
      <a href="/lobby">
        <rect x="1075" y="365" width="90" height="65" fill="transparent" rx="5" ry="5">
          <title>Lobby</title>
        </rect>
      </a>
      <a href="/trainingbuilding">
        <rect x="945" y="510" width="110" height="60" fill="transparent" rx="5" ry="5">
          <title>Training Building</title>
        </rect>
      </a>
      <a href="/cafetaria">
        <rect x="890" y="435" width="170" height="70" fill="transparent" rx="5" ry="5">
          <title>Cafetaria</title>
        </rect>
      </a>
      <a href="/dorm-A">
        <rect x="455" y="30" width="220" height="145" fill="transparent" rx="5" ry="5">
          <title>Dormitory A</title>
        </rect>
      </a>
      <a href="/dorm-B">
        <rect x="825" y="630" width="250" height="125" fill="transparent" rx="5" ry="5">
          <title>Dormitory B</title>
        </rect>
      </a>
      <a href="/auditorium">
        <rect x="830" y="505" width="70" height="85" fill="transparent" rx="5" ry="5">
          <title>Auditorium</title>
        </rect>
      </a>
      <a href="/ballroom">
        <rect x="945" y="360" width="115" height="70" fill="transparent" rx="5" ry="5">
          <title>Ballroom</title>
        </rect>
      </a>
      <a href="/mosque">
        <rect x="320" y="165" width="130" height="155" fill="transparent" rx="5" ry="5">
          <title>Mosque</title>
        </rect>
      </a>
      <a href="/parking">
        <rect x="640" y="190" width="230" height="100" fill="transparent" rx="5" ry="5">
          <title>Parking Area</title>
        </rect>
      </a>
      <a href="/parking">
        <rect x="310" y="445" width="240" height="120" fill="transparent" rx="5" ry="5">
          <title>Parking Area</title>
        </rect>
      </a>
      <a href="/sportcenter">
        <rect x="405" y="605" width="160" height="110" fill="transparent" rx="5" ry="5">
          <title>Sport Center</title>
        </rect>
      </a>
      <a href="/utility">
        <rect x="795" y="325" width="100" height="70" fill="transparent" rx="5" ry="5">
          <title>Utility</title>
        </rect>
      </a>
    </svg>
  </div>

  {/* Right - Labels */}
  <div className="w-full md:w-1/2 h-[40vh] md:h-full bg-gray-50 px-4 py-6 overflow-y-auto">
  <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 text-left">
    Map Legend
  </h2>
  <div className="grid grid-cols-2 gap-3 text-gray-800 text-sm">
    {[
      { name: "Lobby", color: "bg-[#000000]" },
      { name: "Training Building", color: "bg-[#5ce1e6]" },
      { name: "Cafetaria", color: "bg-[#c1ff72]" },
      { name: "Dormitory A", color: "bg-[#ff0f00]" },
      { name: "Dormitory B", color: "bg-[#cb6ce6]" },
      { name: "Auditorium", color: "bg-[#737373]" },
      { name: "Ballroom", color: "bg-[#ff66c4]" },
      { name: "Mosque", color: "bg-[#ffde59]" },
      { name: "Parking Area", color: "bg-[#ff7a00]" },
      { name: "Sport Center", color: "bg-[#0ed837]" },
      { name: "Utility", color: "bg-[#5e17eb]" },
    ].map(({ name, color }) => (
      <div key={name} className="flex items-center gap-2">
        <span className={`inline-block w-3 h-3 rounded-full ${color}`}></span>
        <span className="text-xs md:text-sm">{name}</span>
      </div>
    ))}
  </div>
  <div className="mt-4 text-xs text-gray-500">
    <p>Click on the map to navigate to different sections.</p>
  </div>
</div>
</div>
  );
}

export default Dashboard;
