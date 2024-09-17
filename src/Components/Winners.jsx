import React from "react";
import "../Styling/Problem.css";

const problemStatements = [
  {
    position: 1,
    team_id:"T-8084",
    team_name: "Eco-Saathi",
    domain: "Smart Cities / Villages"
  },
  {
    position: 2,
    team_id:"T-8019",
    team_name: "Phoenix",
    domain: "Smart Cities / Villages"
  },
  {
    position: 1,
    team_id:"T-8012",
    team_name: "Team Lakshya",
    domain: "HealthCare"
  },
  {
    position: 2,
    team_id:"T-8077",
    team_name: "Local Shrinks",
    domain: "HealthCare"
  },
  {
    position: 1,
    team_id:"T-8033",
    team_name: "My India Now",
    domain: "Education"
  },
  {
    position: 2,
    team_id:"T-8001",
    team_name: "Tech Royale",
    domain: "Education"
  },
  {
    position: 1,
    team_id:"T-8093",
    team_name: "CropCoders",
    domain: "Agriculture"
  },
  {
    position: 2,
    team_id:"T-8013",
    team_name: "Agrosync",
    domain: "Agriculture"
  },
];

const Problem = () => {
  return (
    <div className="problem">
      <div className="problem_statements">
        {/* <h1>WINNERS</h1> */}
        <div className="table-responsive" style={{ borderRadius: "10px" }}>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col" className="col-2">
                  POSITION
                </th>
                <th scope="col" className="col-2">
                  TEAM ID
                </th>
                <th scope="col">TEAM NAME</th>
                <th scope="col" className="col-4">
                  DOMAIN
                </th>
              </tr>
            </thead>
            <tbody>
              {problemStatements.map((problem, team_id) => (
                <tr key={team_id}>
                  <td>{problem.position}</td>
                  <td>{problem.team_id}</td>
                  <td>{problem.team_name}</td>
                  <td>{problem.domain}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem;
