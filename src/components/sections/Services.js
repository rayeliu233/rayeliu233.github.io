// Developed by Chouseki 
// Last modifed date: Nov 7, 2023
// Change: deleted icon & content, done.

import React from "react";
import { Link } from "react-scroll";
import Pagetitle from "../elements/Pagetitle";
import Service from "../elements/Service";

const servicesData = [
  {
    id: 1,
    title: "Deep Learning",
    color: "#a7b8a0",
    contentColor: "light",
  },
  {
    id: 2,
    title: "Multimodel ML",
    color: "#497566",
    contentColor: "dark",
  },
  {
    id: 3,
    title: "Optimization",
    color: "#b9d2c5",
    contentColor: "dark",
  },
  {
    id: 4,
    title: "Dimensionality Reduction",
    color: "#b9d2c5",
    contentColor: "dark",
  },
  {
    id: 5,
    title: "Natural Language Processing",
    color: "#a7b8a0",
    contentColor: "dark",
  },
  {
    id: 6,
    title: "Audio Signal Processing",
    color: "#497566",
    contentColor: "dark",
  },
];

function Services() {
  return (
    <section id="services">
      <div className="container">
        <Pagetitle title="Research Interest" />
        <div className="row fix-spacing">
          {servicesData.map((service) => (
            <div className="col-md-4" key={service.id}>
              <Service service={service} />
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="mb-0">
            <Link
              className="colorpink pointer"
              to="section-contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Click here
            </Link>{" "}
            to contact me for research opportunities or interests.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
