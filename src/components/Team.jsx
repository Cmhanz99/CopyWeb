import React from "react";

const Team = ({ position, name, location, hobbies, greeting, img }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 hover:-translate-y-1 hover:bg-slate-200 transition-all duration-500">
      <div className="flex items-start space-x-6">
        {/* Profile Picture Placeholder */}
        <div className="flex-shrink-0">
          <div className="w-24 h-24 bg-slate-300 rounded-full flex items-center bg-cover justify-center"
          style={{ backgroundImage: `url(${img})` }}
          >
          </div>
        </div>

        {/* Member Information */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-slate-800 mb-1">
            {name}
          </h3>
          <p className="text-slate-600 font-medium mb-2">
            {position}
          </p>
          <p className="text-slate-500 text-sm mb-2">
            📍 Born in {location}
          </p>
          <p className="text-slate-600 text-sm mb-2">
            <span className="font-medium">Hobbies:</span> {hobbies}
          </p>
          <p className="text-slate-500 text-sm italic">
            Greeting: "{greeting}"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;