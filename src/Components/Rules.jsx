import React from "react";
import "../Styling/Rules.css";
const Rules = () => {
  return (
    <div className="rules">
      <h1>GUIDELINES</h1>
      <div className="rule">
        <h2>EVALUATION CRITERIA</h2>
        <ul>
          <li>Novelty of the idea to address the problem</li>
          <li>Approach to Explore Idea</li>
          <li>Feasibility & Complexity</li>
          <li>
            Approach towards implementing the System and Future Use cases
          </li>
          <li>Clarity & details in the presentation as a team and Q & A</li>
          <li><span className="imp">
            Time constraint for online presentation - 10 min presentation + 5 min QnA <br />
            Total of 15 min for each team
          </span>
          </li>
          
        </ul>
      </div>
      <div className="rule">
        <h2>TEAM FORMATION</h2>
        <ul>
          <li>
            Each team would mandatorily comprise of minimum 4 and maximum of 6
            members including the team leader.
          </li>
          <li>Student can be member of one team only.</li>
        </ul>
      </div>
      <div className="rule">
        <h2>TEAM SUBMISSION PROCESS</h2>
        <ul>
          <li>
            It is mandatory that the team leader enters the details for his/her
            team.Team details once entered cannot be altered. The team leader
            will be responsible for ensuring that all the data entered by him/
            her is accurate.
          </li>
          <li>
            The team’s name should be unique and must not contain the name of
            your institute in any form.
          </li>
          <li>
            <span className="imp">
              Registration Fee for the event will be declared soon.
              {/* <b>&#8377; 400 /- (Till 19th Feb)</b> */}
            </span>
          </li>
          <li>
            <span className="imp">
              International teams, before registration, please email{" "}
              <a href="mailto:litakeatharva24@gmail.com">
                abc@gmail.com
              </a>
            </span>
          </li>
          <li>
            Each team can submit multiple ideas. However, for each idea new
            registration(including registration fees) is required.
          </li>

          <li>
            <span className="imp">
              The teams registered for TechFiesta shall be allowed to
              participate in Impetus n Concepts 2024 other subevents (free of
              charges). However, such teams must register for those events
              separately.
            </span>
          </li>
        </ul>
      </div>
      <div className="rule">
        <h2>IDEA NOMINATION PROCESS</h2>
        <ul>
          <li>
            Idea submission form will start from 19/01/2024 and only 100 teams
            will be shortlisted for further rounds.
          </li>
          <li>
            Nominated Team's team leader will get the notifications through mail
            to complete the idea submission process.
          </li>
          <li>
            <span className="imp">
              The last date for team nomination and idea submission by team
              leader on portal is till 19/02/2024 only. No request will be
              entertained after the deadline.
            </span>
          </li>
        </ul>
      </div>
      <div className="rule">
        <h2>IDEA SELECTION CRITERIA</h2>
        <ul>
          <li>
            Post Idea submission process, the ideas will be evaluated by experts
            from industry. Evaluation criteria will include novelty of the idea,
            complexity, clarity and details in the prescribed format,
            feasibility, practicability, sustainability, scale of impact, user
            experience and potential for future work progression.
          </li>
        </ul>
      </div>
      <div className="rule">
        <h2>MODE OF HACKATHON</h2>
        <ul>
          <li>
            TechFiesta PICT-Hackathon 2024’s pre-final rounds will be held
            online. The tentative date for these rounds will be Last Week of
            Feb 2024. The final round will be held offline and will be held Last week of March 2024.
          </li>
        </ul>
      </div>
      <div className="rule">
        <h2>SHORTLISTED IDEAS FOR FINAL ROUND- ANNOUNCEMENT</h2>
        <ul>
          <li>
            Notification about selected teams will be put up on our portal and
            PICT website and will also be sent to their respective email IDs.
          </li>
          <li>
            Be available for meetings, sessions and trainings during the
            preparation phase; you will be notified about them in advance.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Rules;
