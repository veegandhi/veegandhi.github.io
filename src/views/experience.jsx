import React from "react";
import { getData } from "../utils";
import { Wrapper } from "../components";
import Parser from "html-react-parser";

const { experience } = getData();
const Intro = () => {
  return (
    <Wrapper>
      <h2 className="mb-5">{experience.heading}</h2>
      {experience.roles.map(role => <PositionItem position={role} />)}
    </Wrapper>
  );
};

const PositionItem = ({ position }) => (
  <div className="resume-item d-flex flex-column flex-md-row mb-5">
    <div className="resume-content mr-auto">
      <h3 className="mb-0">{position.title}</h3>
      <div className="subheading mb-3">{position.company}</div>
      <div className="description">{Parser(position.description)}</div>
    </div>
    <div className="resume-date text-md-right">
      <span className="text-primary">{position.timespan}</span>
    </div>
  </div>
);

export default Intro;
