"use client";

import React, { useState } from "react";
import { 
  Menu, Layout, 
  ChevronDown, ChevronUp, Building2, ParkingCircle, Utensils,
  CircleSmall, Minus, Bed, Sofa, MoonStar,
  Projector,
  Dribbble,
  Presentation,
  Zap
} from "lucide-react";
import Link from "next/link";

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isCollapsed, toggleSidebar }: SidebarProps) => {
  const [isTrainingBuildingExpanded, setIsTrainingBuildingExpanded] = useState(false);
  const [isDormitoriesExpanded, setIsDormitoriesExpanded] = useState(false);
  const [isDormBExpanded, setIsDormBExpanded] = useState(false);

  // Separate state for each floor
  const [isLGExpanded, setIsLGExpanded] = useState(false);
  const [isGFExpanded, setIsGFExpanded] = useState(false);
  const [isUGExpanded, setIsUGExpanded] = useState(false);

  return (
    <>
      {!isCollapsed && <div className="fixed inset-0 z-40" onClick={toggleSidebar}></div>}

      <div
        className={`fixed top-0 right-0 bg-white shadow-md z-50 transition-transform duration-300 w-64 
        ${isCollapsed ? "translate-x-full" : "translate-x-0"} 
        h-full flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-black">MAP</h1>
          <button className="p-2 rounded-full hover:bg-gray-100" onClick={toggleSidebar}>
            <Menu className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Sidebar Menu (Scrollable) */}
        <div className="flex-1 overflow-y-auto">
          <nav className="mt-5">
            <SidebarLink href="/dashboard" icon={Layout} label="Dashboard" />
            <SidebarLink href="/lobby" icon={Sofa} label="Lobby" />
                        
            {/* Classroom (Collapsible) */}
            <CollapsibleSection 
              title="Training Building" 
              isExpanded={isTrainingBuildingExpanded} 
              toggleExpand={() => setIsTrainingBuildingExpanded(!isTrainingBuildingExpanded)}
              icon={() => <Building2 className="w-5 h-5 text-gray-700" />}
            >
              {/* Lower Ground (LG) */}
              <CollapsibleSection 
                title="Lower Ground (LG)" 
                isExpanded={isLGExpanded} 
                toggleExpand={() => setIsLGExpanded(!isLGExpanded)}
                icon={() => <CircleSmall className="w-4 h-4 text-gray-700" />}
              >
                {isLGExpanded && (
                  <div className="pl-6">
                    <SidebarLink href="/trainingbuilding/LG/classroom1" icon={Minus} label="LG-Classroom-1" />
                    <SidebarLink href="/trainingbuilding/LG/classroom2" icon={Minus} label="LG-Classroom-2" />
                    <SidebarLink href="/trainingbuilding/LG/classroom3" icon={Minus} label="LG-Classroom-3" />
                  </div>
                )}
              </CollapsibleSection>

              {/* Ground Floor (GF) */}
              <CollapsibleSection 
                title="Ground Floor (GF)" 
                isExpanded={isGFExpanded} 
                toggleExpand={() => setIsGFExpanded(!isGFExpanded)}
                icon={() => <CircleSmall className="w-4 h-4 text-gray-700" />}
              >
                {isGFExpanded && (
                  <div className="pl-6">
                    <SidebarLink href="/trainingbuilding/GF/frontoffice" icon={Minus} label="Front Office" />
                    <SidebarLink href="/trainingbuilding/GF/classroom1" icon={Minus} label="GF-Classroom-1" />
                    <SidebarLink href="/trainingbuilding/GF/classroom2" icon={Minus} label="GF-Classroom-2" />
                    <SidebarLink href="/trainingbuilding/GF/classroom3" icon={Minus} label="GF-Classroom-3" />
                 </div>
                )}
              </CollapsibleSection>

              {/* Upper Ground (UG) */}
              <CollapsibleSection 
                title="Upper Ground (UG)" 
                isExpanded={isUGExpanded} 
                toggleExpand={() => setIsUGExpanded(!isUGExpanded)}
                icon={() => <CircleSmall className="w-4 h-4 text-gray-700" />}
              >
                {isUGExpanded && (
                  <div className="pl-6">
                    <SidebarLink href="/trainingbuilding/UG/classroom1" icon={Minus} label="UG-Classroom-1" />
                    <SidebarLink href="/trainingbuilding/UG/classroom2" icon={Minus} label="UG-Classroom-2" />
                    <SidebarLink href="/trainingbuilding/UG/classroom3" icon={Minus} label="UG-Classroom-3" />
                    <SidebarLink href="/trainingbuilding/UG/classroom4" icon={Minus} label="UG-Classroom-4" />
                  </div>
                )}
              </CollapsibleSection>
            </CollapsibleSection>

            <SidebarLink href="/cafetaria" icon={Utensils} label="Cafetaria" />

            {/* Dormitories (Collapsible) */}
            <CollapsibleSection 
              title="Dormitories" 
              isExpanded={isDormitoriesExpanded} 
              toggleExpand={() => setIsDormitoriesExpanded(!isDormitoriesExpanded)}
              icon={() => <Bed className="w-5 h-5 text-gray-700" />}
            >
              <SidebarLink href="/dorm-A" icon={() => <CircleSmall className="w-4 h-4 text-gray-700"/> } label="Dorm A" />

              {/* Dormitory B (Nested Collapsible) */}
              <CollapsibleSection 
                title="Dorm B" 
                isExpanded={isDormBExpanded} 
                toggleExpand={() => setIsDormBExpanded(!isDormBExpanded)}
                icon={() => <CircleSmall className="w-4 h-4 text-gray-700" />}
              >
                {isDormBExpanded && (
                  <div className="pl-6">
                    <SidebarLink href="/dorm-B/type-A" icon={Minus} label="Type A" />
                    <SidebarLink href="/dorm-B/type-B" icon={Minus} label="Type B" />
                    <SidebarLink href="/dorm-B/type-C" icon={Minus} label="Type C" />
                  </div>
                )}
              </CollapsibleSection>
            </CollapsibleSection>
                            
              {/* Other Links */}
            <SidebarLink href="/auditorium" icon={Projector} label="Auditorium" />
            <SidebarLink href="/ballroom" icon={Presentation} label="Ballroom" />
            <SidebarLink href="/mosque" icon={MoonStar} label="Mosque" />
            <SidebarLink href="/parking" icon={ParkingCircle} label="Parking" />
            <SidebarLink href="/sportcenter" icon={Dribbble} label="Sport Center"/>
            <SidebarLink href="/utility" icon={Zap} label="Utility" />
          </nav>
        </div>
      </div>
    </>
  );
};

// Sidebar Link Component
const SidebarLink = ({ href, icon: Icon, label }: { href: string; icon?: any; label: string }) => {
  return (
    <Link href={href}>
      <div className="flex items-center gap-3 px-4 py-2 transition-colors cursor-pointer hover:bg-blue-100">
        {Icon && <Icon className="w-5 h-5 text-gray-700" />}
        <span className="text-gray-700 text-sm font-medium">{label}</span>
      </div>
    </Link>
  );
};

// Reusable Collapsible Section Component
const CollapsibleSection = ({ title, isExpanded, toggleExpand, children, icon }: { 
  title: string; 
  isExpanded: boolean; 
  toggleExpand: () => void; 
  children: React.ReactNode; 
  icon?: () => React.ReactNode;
}) => {
  return (
    <div>
      <div className="px-4 py-2 cursor-pointer flex items-center justify-between hover:bg-blue-100" onClick={toggleExpand}>
        <div className="flex items-center gap-3">
          {icon && icon()}
          <span className="text-gray-700 text-sm font-medium">{title}</span>
        </div>
        {isExpanded ? <ChevronUp className="w-4 h-4 text-gray-700" /> : <ChevronDown className="w-4 h-4 text-gray-700" />}
      </div>
      {isExpanded && <div>{children}</div>}
    </div>
  );
};

export default Sidebar;
