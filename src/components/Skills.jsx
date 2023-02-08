import React from "react";
import "./Skills.css";

const Skills = ({ mySkills }) => {
  return (
    <>
      <div className="skills" id="skill">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1 className="skill-heading">
                <b>Skills</b>
              </h1>
            </div>
            <div class="col-6 col-md-4 ">
              <div>
                <ul>
                  {mySkills.map((items) => {
                    return <li>{items}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
