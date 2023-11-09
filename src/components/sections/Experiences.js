// Developed by Chouseki
// Last modifed date: Nov 7, 2023
// Change: modified experience

import React from "react";
import Pagetitle from "../elements/Pagetitle";
import Timeline from "../elements/Timeline";

const educationData = [
  {
    id: 1,
    title: "PhD in Computer Science",
    years: "August 2023 - Present",
    content:
      "University of Rochester, NY",
  },
  {
    id: 2,
    title: "Master of Engineering in Computer Science",
    years: "Sept 2022 - May 2023",
    content:
      "Cornell Univerity, NY",
  },
  {
    id: 3,
    title: "Bachelor of Science in Operations Research & Information Engineering",
    years: "Sept 2018 - May 2022",
    content:
      "Cornell Univerity, NY",
  },
  {
    id: 4,
    title: "Elementary Degree",
    years: "2012 - 2018",
    content:
      "Tianjin Foreign Languages School, Tianjin, China",
  },
];

const experienceData = [
  {
    id: 1,
    title: "Software Engineer Intern",
    years: "June 2019 - August 2019",
    content:
      "UnionPay, Pudong, Shanghai, China",
  },
  {
    id: 2,
    title: "Data Analyst Intern",
    years: "May 2020 - July 2020",
    content:
      "UnionPay, Pudong, Shanghai, China",
  },
];

function Experiences() {
  return (
    <section id="experience">
      <div className="container">
        <Pagetitle title="Educational & Professional Experience" />
        <div className="row">
          <div className="col-md-6">
            <div className="timeline edu bg-white rounded shadow-dark padding-30 overflow-hidden">
              {educationData.map((education) => (
                <Timeline key={education.id} education={education} />
              ))}
              <span className="line"></span>
            </div>
          </div>

          <div className="col-md-6">
            <div className="spacer d-md-none d-lg-none" data-height="30"></div>
            <div className="timeline exp bg-white rounded shadow-dark padding-30 overflow-hidden">
              {experienceData.map((experience) => (
                <Timeline key={experience.id} education={experience} />
              ))}
              <span className="line"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
