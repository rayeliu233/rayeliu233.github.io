// Developed by Chouseki 
// Last modifed date: Nov 7, 2023
// Change: changed about page

import React from "react";
import TrackVisibility from "react-on-screen";
// import Counter from "../elements/Counter";
import Pagetitle from "../elements/Pagetitle";
import Skill from "../elements/Skill";

const aboutContent = {
  name: "Raye Liu",
  avatarImage: "/images/chouseki_pic/rl_head.jpg",
};

const progressData = [
  {
    id: 1,
    title: "Machine Learning",
    percantage: 95,
    progressColor: "#497466",
  },
  {
    id: 2,
    title: "Human Computer Interaction",
    percantage: 85,
    progressColor: "#deefe0",
  },
  // {
  //   id: 3,
  //   title: "Statistical Genetics",
  //   percantage: 70,
  //   progressColor: "#dbeae5",
  // },
  {
    id: 4,
    title: "High-Dimensional Data in Healthcare",
    percantage: 70,
    progressColor: "#bee0d0",
  },
];

// const counterData = [
//   {
//     id: 1,
//     title: "Projects completed",
//     count: 198,
//     icon: "icon-fire",
//   },
//   {
//     id: 2,
//     title: "Cup of coffee",
//     count: 5670,
//     icon: "icon-cup",
//   },
//   {
//     id: 3,
//     title: "Satisfied clients",
//     count: 427,
//     icon: "icon-people",
//   },
//   {
//     id: 4,
//     title: "Nominees winner",
//     count: 35,
//     icon: "icon-badge",
//   },
// ];

function About() {
  return (
    <section id="about">
      <div className="container">
        <Pagetitle title="About Me" />
        <div className="row">
          <div className="col-md-3">
            <div className="text-center text-md-left">
              <img src={aboutContent.avatarImage} alt={aboutContent.name} />
            </div>
            <div className="spacer d-md-none d-lg-none" data-height="40"></div>
          </div>

          <div className="col-md-9 triangle-left-md triangle-top-sm">
            <div className="rounded bg-white shadow-dark padding-30">
              <div className="row">
                <div className="col-md-6">
                  <p>I am a PhD student at <a href="https://www.cs.rochester.edu/index.html">URCS</a> since August 2023. I received Bachelor of Science degree in <a href="https://www.orie.cornell.edu/orie">Operations Research & Information Engineering</a> from Cornell.  I am currently working on the <a href="https://roc-hci.com/current-projects/park-parkinsons-analysis-with-remote-kinetic-tasks/">PARK project</a> in the ROCHCI lab with Professor Ehsan Hoque. </p>
                  <div className="mt-3">
                    <a href="/files/resume.pdf" className="btn btn-default">
                      Download CV
                    </a>
                  </div>
                  <div
                    className="spacer d-md-none d-lg-none"
                    data-height="30"
                  ></div>
                </div>
                <div className="col-md-6">
                  {progressData.map((progress) => (
                    <TrackVisibility
                      once
                      key={progress.id}
                      className="progress-wrapper"
                    >
                      <Skill progress={progress} />
                    </TrackVisibility>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer" data-height="70"></div>
        {/* <div className="row fix-spacing">
          {counterData.map((counter) => (
            <div key={counter.id} className="col-md-3 col-sm-6">
              <TrackVisibility once>
                <Counter counterItem={counter} />
              </TrackVisibility>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default About;
