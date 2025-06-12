// Members.js
import React from "react";
import Team from "./Team";
import ryo from "/src/assets/ryo-danno.png";
import namiki from "/src/assets/namiki-niwa.png";
import dex from "/src/assets/dexter-radines.png";
import russel from "/src/assets/russel-dotdot.png";
import lieve from "/src/assets/lieve.png";

const Members = () => {
  // Team data organized in an array for cleaner code
  const teamMembers = [
    {
      id: 1,
      position: "Director GA4 Analyst",
      name: "Ryo Danno",
      location: "Aichi, Japan",
      hobbies: "Weight training and overseas travel",
      greeting: "Kontsua",
      image: ryo,
    },
    {
      id: 2,
      position: "Frontend Bridge Engineer",
      name: "Namiki Niwa",
      location: "Nagano, Japan",
      hobbies: "Visiting Karenderias",
      greeting: "Hey!",
      image: namiki,
    },
    {
      id: 3,
      position: "Software Engineer",
      name: "Dexter Ladines",
      location: "Negros Occidental, Philippines",
      hobbies: "World Map collecting and conversations",
      greeting: "Boss!",
      image: dex,
    },
    {
      id: 4,
      position: "Software Engineer",
      name: "Russell Dotdot",
      location: "Mindanao, Philippines",
      hobbies: "Playing Tetris",
      greeting: "Uyyy!",
      image: russel,
    },
    {
      id: 5,
      position: "Photographer",
      name: "Lieve Polentinos",
      location: "Lapu-Lapu City, Philippines",
      hobbies: "Photography",
      greeting: "Lodi ur lods",
      image: lieve,
    }
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Nexus Members
          </h1>
          <p className="text-slate-600 text-lg">
            — Meet Our Reliable Team Members —
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <Team
              key={member.id}
              position={member.position}
              name={member.name}
              location={member.location}
              hobbies={member.hobbies}
              greeting={member.greeting}
              img={member.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Members;
