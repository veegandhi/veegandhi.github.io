import React from "react";
import { getData } from "../utils";
import { Wrapper, SocialIcon } from "../components";

const { landing } = getData();
const Intro = () => {
  return (
    <Wrapper>
      <h1 className="mb-0">
        {landing.firstName}
        <span className="text-primary"> {landing.lastName}</span>
      </h1>
      <div className="subheading mb-5">
        <a href={`mailto:${landing.email}`}>{landing.email}</a>
      </div>
      <p className="mb-5 description">{landing.description}</p>
      <ul className="list-inline list-social-icons mb-0">
        {landing.socialIcons.map(icon => (
          <SocialIcon key={icon.link} icon={icon} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default Intro;
