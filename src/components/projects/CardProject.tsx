import React from "react";
import { LuCalendarClock, LuCalendarCheck2 } from "react-icons/lu";
import "@/assets/sass/components/projects/cardProject.scss";
const CardProject = () => {
  return (
    <div className="card">
      <div className="card-header">
        <p className="header-text">THETECH</p>
      </div>
      <div className="card-foter">
        <div className="foter-times">
          <div className="time-start">
            <LuCalendarClock size={13} color="rgba(104, 102, 102, 1)" />
            <p className="start-text">01.04.2025</p>
          </div>
          <div className="time-status">In progres</div>
          <div className="time-start">
            <LuCalendarCheck2 size={13} color="rgba(104, 102, 102, 1)" />
            <p className="start-text">10.04.2025</p>
          </div>
        </div>
        <div className="foter-progres"></div>
      </div>
    </div>
  );
};

export default CardProject;
