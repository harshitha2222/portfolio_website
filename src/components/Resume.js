import React, { Component } from "react";
import "../components/Resume.css";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">

                      <p className="info">
                        <h3>{item.UniversityName}</h3>
                        {item.specialization}
                        {/* <p>{item.Courses}</p> */}
                        <p> </p>
                        <span>&bull;</span>{" "}
                        
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>

                        <p> </p>
                          <span>&bull;</span>{" "}
                          <em className="date">{item.Courses}</em>
                      </p>
                      
                      {/* <p>{item.cgpa}</p> */}
                      <p>
                      <p> </p>
                          <span>&bull;</span>{" "}
                          <em className="date"><p>{item.cgpa}</p></em>
                      </p>

                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      
                      <br />
                      <p className="info">
                        {item.specialization}
                        <p> </p>
                        <span>&bull;</span>{" "}
                        
                        <em className="date">
                          {item.MonthOfLeaving}
                          {item.YearOfLeaving}
                        </em>
                      </p>
                      

                      <br />
                      <p>{item.Achievements}</p>

                  

                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>
          <div className="nine columns main-col">
            <div className="ba">
              <ul className="skills">
                {resumeData.skills &&
                  resumeData.skills.map((item) => {
                    return (
                      <li>
                        <span className={` ${item.skillname.toLowerCase()}`} />
                        <em>{item.skillname}</em>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
