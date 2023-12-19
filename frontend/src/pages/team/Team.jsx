// Team.js

import React, { useState, useEffect } from "react";
import "./team.scss"; // Import your SCSS stylesheet
import axios from "axios";

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get(
        "https://backend-my-team-96f315f6.vercel.app/team"
      );
      console.log("Team Members Response:", response.data);
      setTeamMembers(response.data);
    } catch (error) {
      console.error("Error fetching team members", error);
    }
  };

  useEffect(() => {
    fetchTeamMembers();
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Our Team</h1>
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member.id} className="column">
            <div className="card">
              <img
                src={member.image}
                alt={member.name}
                style={{ width: "100%" }}
              />
              <div className="container">
                <h2>{member.name}</h2>
                <p className="title">{member.position}</p>

                <p>{member.email}</p>
                <p>
                  <button className="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
