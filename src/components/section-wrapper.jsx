import React from "react";

const Wrapper = props => (
  <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
    <div className="my-auto">{props.children}</div>
  </section>
);

export default Wrapper;
